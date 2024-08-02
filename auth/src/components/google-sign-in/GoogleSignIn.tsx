import { Button } from "@mui/material";
import React from "react";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "@mui/icons-material/Google";
import { useStore } from "store/Store";

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

  return (
    <Button
      onClick={() => login()}
      variant="contained"
      startIcon={<GoogleIcon />}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleSignIn;
