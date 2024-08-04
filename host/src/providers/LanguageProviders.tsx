import React, { ReactNode, useState } from "react";
import { LanguageContext } from "../context/Language";
import { useNavigate, useParams } from "react-router-dom";
// interface
interface ThemeProviderProps {
  children: ReactNode;
}
const LanguageProviders: React.FC<ThemeProviderProps> = ({ children }) => {
  //   query params
  const { locale } = useParams();
  const navigate = useNavigate();

  // states
  const [language, setLang] = useState(locale);

  //   functions
  const setLanguage = (newLang: string) => {
    const currentPath = location.pathname;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("locale", newLang);
    navigate({
      pathname: currentPath,
      search: searchParams.toString(),
    });

    setLang(newLang);
  };
  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProviders;
