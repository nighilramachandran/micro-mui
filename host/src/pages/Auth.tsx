import React, { useEffect } from "react";
import Login from "login/Login";
import { Grid } from "@mui/material";
import { useStore } from "store/Store";
import { useNavigate } from "react-router-dom";

const AuthPage: React.FC = () => {
  // store items
  const { authenticated } = useStore();

  // navigator
  const navigate = useNavigate();

  // Effects
  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated]);

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "calc(100vh - 200px)" }}
    >
      <Grid item xs={12} lg={7}>
        <Login />
      </Grid>
    </Grid>
  );
};

export default AuthPage;
