import { Button } from "@mui/material";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleSignIn = () => {
  // functions
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
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
