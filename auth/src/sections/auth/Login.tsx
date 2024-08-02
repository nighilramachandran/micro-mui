import React from "react";
import { CustomForm, CustomInputFormProps } from "../../components/form";
import { Paper } from "@mui/material";

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
  return (
    <Paper>
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
