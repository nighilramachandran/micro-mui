import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import {
  appBarStyles,
  headerStyles,
  logoWrapperStyles,
} from "../../../styles/header";

const Header: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <Box sx={{ ...logoWrapperStyles }}></Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
