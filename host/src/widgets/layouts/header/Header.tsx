import React, { useContext, useEffect } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { appBarStyles, headerStyles } from "../../../styles/header";
import { ChangeThemeButton } from "../../../components/buttons/ChangeThemeButton";
import { LanguageContext } from "../../../context/Language";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../../components/select/LanguageSelect";

const Header: React.FC = () => {
  const [language, _] = useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <AppBar sx={{ ...appBarStyles }}>
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <Typography
          variant="h2"
          color="gradient"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          {t("SHOP_NOW")}
        </Typography>
        <ChangeThemeButton />
        <LanguageSelect />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
