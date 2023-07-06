import { ReactNode, createContext, useState } from "react";
import { Languages } from "../types";

const LanguageContext = createContext({});

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language is 'en'

  const changeLanguage = (newLanguage: Languages) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
