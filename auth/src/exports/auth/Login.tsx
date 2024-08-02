import React, { CSSProperties } from "react";
import { CustomForm, CustomInputFormProps } from "../../components/form";
import { Paper, Stack, Typography } from "@mui/material";
import GoogleSignIn from "../../components/google-sign-in/GoogleSignIn";

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

const loginStackStyles: CSSProperties = {
  textAlign: "center",
};

const Login: React.FC = () => {
  return (
    <Paper>
      <Stack sx={{ ...loginStackStyles }} spacing={2}>
        <CustomForm
          formName="form"
          inputs={inputs}
          resetFrom
          onSubmit={() => null}
          submitLable={"Login"}
        ></CustomForm>
        <Typography>OR</Typography>
        <GoogleSignIn />
      </Stack>
    </Paper>
  );
};

export default Login;
