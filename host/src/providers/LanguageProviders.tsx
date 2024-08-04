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

  // states
  const [language, setLang] = useState(locale ?? "en");

  //   functions
  const setLanguage = (newLang: string) => {
    setLang(newLang);
  };
  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProviders;
