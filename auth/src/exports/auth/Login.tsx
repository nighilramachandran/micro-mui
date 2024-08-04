import React, { CSSProperties } from "react";
import { CustomForm, CustomInputFormProps } from "../../components/form";
import { Paper, Stack, Typography } from "@mui/material";
import GoogleSignIn from "../../components/google-sign-in/GoogleSignIn";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useStore } from "store/Store";
import GoogleIcon from "@mui/icons-material/Google";
import Person2Icon from "@mui/icons-material/Person2";
import PasswordIcon from "@mui/icons-material/Password";
import { useTranslation } from "react-i18next";

// interfaces
interface LoginCredentialProps {
  username: string;
  password: string;
}

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

const Login: React.FC = () => {
  const { t } = useTranslation();

  //inputs
  const inputs: CustomInputFormProps[] = [
    {
      type: "text",
      name: "username",
      label: t("User_Name"),
      placeholder: "admin",
      validate: { required: true },
      autoComplete: "false",
      colProps: { xs: 12 },
    },
    {
      type: "password",
      name: "password",
      label: t("Password"),
      placeholder: "admin",
      validate: { required: true },
      colProps: { xs: 12 },
    },
  ];

  const errorMessage = (
    <Stack>
      <Typography>
        <Stack sx={{ ...stackStyles }}>
          <GoogleIcon />
          {t("Sign_in_with_Google")}s
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
  // store items
  const { dispatchGoogleAuthenticate } = useStore();

  // functions
  const handleLogin = (vals: LoginCredentialProps) => {
    const { username, password } = vals;
    if (username === "admin" && password === "admin") {
      dispatchGoogleAuthenticate(username);
    } else {
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
          <GoogleSignIn />
          <Typography>{t("OR")}</Typography>
          <CustomForm
            formName="form"
            inputs={inputs}
            resetFrom
            onSubmit={(vals) => handleLogin(vals)}
            submitLable={t("Login")}
          ></CustomForm>
        </Stack>
      </Paper>
    </SnackbarProvider>
  );
};

export default Login;
