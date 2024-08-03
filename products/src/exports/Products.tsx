import { Grid, Paper } from "@mui/material";
import React from "react";

const Products: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Paper>asdfasdfsadf</Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper>asdfasdfsadf</Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper>asdfasdfsadf</Paper>
      </Grid>
    </Grid>
  );
};

export default Products;
