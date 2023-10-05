import { useState } from "react";
import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

export const useVerifConfirm = () => {
  const [confirmData, setConfirmData] = useState({
    email: process.env.EMAIL,
    verifCode: "",
  });

  const handleChange = (event) => {
    setConfirmData({ ...confirmData, [event.target.name]: event.target.value });
  };

  const handleConfirm = () => {
    const poolData = {
      UserPoolId: process.env.USER_POOL_ID,
      ClientId: process.env.CLIENT_ID,
    };

    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username: confirmData.email,
      Pool: userPool,
    };
    const cognitorUser = new CognitoUser(userData);
    cognitorUser.confirmRegistration(
      confirmData.verifCode,
      true,
      function (err, result) {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        console.log("call result:" + result);
      }
    );
  };
  return {
    confirmData,
    setConfirmData,
    handleChange,
    handleConfirm,
  };
};
