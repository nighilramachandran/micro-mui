import React from "react";
import Login from "login/Login";
import { Grid } from "@mui/material";
import { useStore } from "store/Store";

const Home: React.FC = () => {
  const { status } = useStore();
  console.log("status", status);

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
