import { Button } from "@mui/material";
import React from "react";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "@mui/icons-material/Google";
import { useStore } from "store/Store";
import { useTranslation } from "react-i18next";

const GoogleSignIn = () => {
  // store items
  const { dispatchGoogleAuthenticate } = useStore();

  // functions
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => handleAuthenticate(tokenResponse),
  });

  const handleAuthenticate = (tokenResponse: TokenResponse) => {
    dispatchGoogleAuthenticate(tokenResponse.access_token);
  };
  const { t } = useTranslation();

  return (
    <Button
      onClick={() => login()}
      variant="contained"
      startIcon={<GoogleIcon />}
    >
      {t("Sign_in_with_Google")}
    </Button>
  );
};

export default GoogleSignIn;
