import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { appBarStyles, headerStyles } from "../../../styles/header";
import { ChangeThemeButton } from "../../../components/buttons/ChangeThemeButton";
import { useParams } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <Typography
          variant="h2"
          color="gradient"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          SHOP NOW
        </Typography>
        <ChangeThemeButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
