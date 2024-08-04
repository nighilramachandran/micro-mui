import React, { ReactNode, useState } from "react";
import { LanguageContext } from "../context/Language";
import { useParams } from "react-router-dom";
// interface
interface ThemeProviderProps {
  children: ReactNode;
}
const LanguageProviders: React.FC<ThemeProviderProps> = ({ children }) => {
  // State
  const [lang, setLang] = useState<string>(
    () => localStorage.getItem("lang") ?? "en"
  );

  //   functions
  const setLanguage = (newLang: string) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={[lang, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProviders;
