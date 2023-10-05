import { useRouter } from "next/navigation";
import { useState } from "react";
import * as AWS from "aws-sdk/global";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from "amazon-cognito-identity-js";

export const useLoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: process.env.EMAIL,
    password: "P@ssw0rd",
  });

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    const authUser = {
      Username: loginData.email,
      Password: loginData.password,
    };
    const authDetails = new AuthenticationDetails(authUser);

    const poolData = {
      UserPoolId: process.env.USER_POOL_ID,
      ClientId: process.env.CLIENT_ID,
    };
    const userPool = new CognitoUserPool(poolData);

    const userData = {
      Username: loginData.email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: function (result) {
        const idToken = result.getIdToken().getJwtToken();
        const accessToken = result.getAccessToken().getJwtToken();

        // console.log("idToken : " + idToken);
        // console.log("accessToken : " + accessToken);

        const region = process.env.REGION;
        const userPoolId = process.env.USER_POOL_ID;
        const loginsKey = `cognito-idp.${region}.amazonaws.com/${userPoolId}`;

        AWS.config.region = region;
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: process.env.ID_POOL_ID,
          Logins: {
            [loginsKey]: idToken,
          },
        });

        // 認証情報の更新
        AWS.config.credentials.refresh((error) => {
          if (error) {
            console.error(error);
          } else {
            console.log("Successfully logged!");
          }
        });
      },
      onFailure: function (err) {
        console.log(err);
        alert(err.message || JSON.stringify(err));
      },
    });
  };
  return {
    loginData,
    setLoginData,
    handleChange,
    handleLogin,
  };
};
