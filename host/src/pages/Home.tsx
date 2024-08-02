import React from "react";
import Login from "login/Login";
import { Grid } from "@mui/material";

const Home: React.FC = () => {
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

export default Home;
