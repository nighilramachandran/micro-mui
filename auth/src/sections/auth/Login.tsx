import React from "react";
import { CustomForm, CustomInputFormProps } from "../../components/form";
import { Button, Paper } from "@mui/material";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import GoogleIcon from "@mui/icons-material/Google";

//inputs
const inputs: CustomInputFormProps[] = [
  {
    type: "text",
    name: "username",
    label: "User Name",
    placeholder: "admin",
    validate: { required: true },
    autoComplete: "false",
    colProps: { xs: 12 },
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "admin",
    validate: { required: true },
    colProps: { xs: 12 },
  },
];

const Login: React.FC = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  googleLogout();
  return (
    <Paper>
      <Button
        onClick={() => login()}
        variant="contained"
        startIcon={<GoogleIcon />}
      >
        Sign in with Google
      </Button>
      <CustomForm
        formName="form"
        inputs={inputs}
        resetFrom
        onSubmit={() => null}
        submitLable={"Login"}
      ></CustomForm>
    </Paper>
  );
};

export default Login;
