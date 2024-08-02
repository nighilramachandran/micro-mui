import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId =
  "668468703617-3adnh45mvo2glj6u5698131g9tgtt52t.apps.googleusercontent.com";

const GoogleAuthProvider = ({ children }: any) => {
  return (
    <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;
