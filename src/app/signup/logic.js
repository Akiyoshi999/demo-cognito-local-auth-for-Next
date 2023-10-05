import { useState } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { useRouter } from "next/navigation";

export const useSignUpForm = () => {
  const [formData, setFormData] = useState({
    email: process.env.EMAIL,
    password: "P@ssw0rd",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const router = useRouter();
  const handleSignUp = () => {
    const poolData = {
      UserPoolId: process.env.USER_POOL_ID,
      ClientId: process.env.CLIENT_ID,
    };

    const userPool = new CognitoUserPool(poolData);
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
        router.push("/confirm", { query: { email: formData.email } });
      }
    );
  };
  return {
    formData,
    setFormData,
    handleChange,
    handleSignUp,
  };
};
