import { useRouter } from "next/navigation";
import { useState } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";

export const useVerifConfirm = () => {
  const [confirmData, setConfirmData] = useState({
    email: "",
    code: "",
  });

  const handleChange = (event) => {
    setConfirmData({ ...confirmData, [event.target.name]: event.target.value });
  };

  const router = useRouter();
  const handleConfirm = () => {
    const poolData = {
      UserPoolId: process.env.USER_POOL_ID,
      ClientId: process.env.CLIENT_ID,
    };

    const userPool = new CognitoUserPool(poolData);
    const username = "hoge2@example.com";
    // const username = "zundokokiyoshi999+test@gmail.com";
    // const password = "P@ssw0rd";
    userPool.signUp(
      formData.email,
      formData.password,
      null,
      null,
      function (err, result) {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        const cognitoUser = result.user;
        console.log("user name is " + cognitoUser.getUsername());
      }
    );
  };
  return {
    confirmData,
    setConfirmData,
    handleChange,
  };
};
