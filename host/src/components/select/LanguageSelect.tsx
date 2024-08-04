import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { LanguageContext } from "../../context/Language";
const languages = [
  { name: "English", value: "en" },
  { name: "العربية", value: "ar" },
];
export default function LanguageSelect() {
  const [language, setLanguage] = useContext(LanguageContext);
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(
    null
  );
  // useEffect(() => {
  //   setLanguageAnchor(null);
  // }, [pathname]);
  const handleClickLanguagesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchor(event.currentTarget);
  };
  const handleCloseLanguagesMenu = () => {
    setLanguageAnchor(null);
  };
  const handleChangeLanguage = (value: string) => {
    setLanguage(value);
    handleCloseLanguagesMenu();
  };
  return (
    <>
      <IconButton onClick={handleClickLanguagesMenu} disableRipple>
        <LanguageIcon />
      </IconButton>
      <Menu
        id="languages-menu"
        open={!!languageAnchor}
        anchorEl={languageAnchor}
        onClose={handleCloseLanguagesMenu}
      >
        {languages.map(({ name, value }) => (
          <MenuItem
            sx={{
              color: "#B1B5C3",

              p: 2,
              "&:hover": {
                bgcolor: "transparent",
                color: "#f6f6f6",
              },
            }}
            key={value}
            onClick={() => handleChangeLanguage(value)}
          >
            <Typography
              variant="body2"
              sx={{ maxWidth: 250, whiteSpace: "pre-wrap" }}
            >
              {name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
