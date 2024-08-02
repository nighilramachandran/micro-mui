import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { appBarStyles, headerStyles } from "../../../styles/header";

const Header: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <Typography variant="h2" color="gradient">
          SHOP NOW
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
