import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { Box, Container } from "@mui/material";
import { LanguageContext } from "../../context/Language";

const Layout: React.FC = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  return (
    <Box dir={language === "ar" ? "rtl" : "ltr"}>
      <Header />
      <Container sx={{ padding: "20px 0px" }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
