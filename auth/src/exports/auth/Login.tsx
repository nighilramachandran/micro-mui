import React, { CSSProperties } from "react";
import { CustomForm, CustomInputFormProps } from "../../components/form";
import { Paper, Stack, Typography } from "@mui/material";
import GoogleSignIn from "../../components/google-sign-in/GoogleSignIn";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useStore } from "store/Store";
import GoogleIcon from "@mui/icons-material/Google";
import Person2Icon from "@mui/icons-material/Person2";
import PasswordIcon from "@mui/icons-material/Password";

// interfaces
interface LoginCredentialProps {
  username: string;
  password: string;
}

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

const stackStyles: CSSProperties = {
  alignItems: "center",
  flexDirection: "row",
  gap: 1,
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: 600,
};

const errorMessage = (
  <Stack>
    <Typography>
      <Stack sx={{ ...stackStyles }}>
        <GoogleIcon />
        Sign in with Google
      </Stack>
    </Typography>
    <Typography sx={{ textAlign: "center" }}>OR</Typography>
    <Typography>
      <Stack sx={{ ...stackStyles }}>
        <Person2Icon />
        admin
        <PasswordIcon />
        admin
      </Stack>
    </Typography>
  </Stack>
);

const Login: React.FC = () => {
  // store items
  const { dispatchGoogleAuthenticate } = useStore();

  // functions
  const handleLogin = (vals: LoginCredentialProps) => {
    const { username, password } = vals;
    if (username === "admin" && password === "admin") {
      dispatchGoogleAuthenticate(username);
    } else {
      console.log("here");

      enqueueSnackbar(errorMessage, {
        variant: "warning",
      });
    }
  };

  return (
    <SnackbarProvider
      maxSnack={2}
      data-testid="toastid"
      autoHideDuration={3000}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      hideIconVariant
    >
      <Paper>
        <Stack sx={{ ...loginStackStyles }} spacing={2}>
          <CustomForm
            formName="form"
            inputs={inputs}
            resetFrom
            onSubmit={(vals) => handleLogin(vals)}
            submitLable={"Login"}
          ></CustomForm>
          <Typography>OR</Typography>
          <GoogleSignIn />
        </Stack>
      </Paper>
    </SnackbarProvider>
  );
};

export default Login;
