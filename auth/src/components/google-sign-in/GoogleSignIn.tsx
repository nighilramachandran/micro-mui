import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "@mui/icons-material/Google";
import { useStore } from "store/Store";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  // navigator
  const navigate = useNavigate();

  // store items
  const { dispatchGoogleAuthenticate, authenticated } = useStore();

  // functions
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => handleAuthenticate(tokenResponse),
  });

  const handleAuthenticate = (tokenResponse: TokenResponse) => {
    console.log("tokenResponse", tokenResponse);
    dispatchGoogleAuthenticate(tokenResponse.access_token);
  };

  //effects
  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated]);
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
