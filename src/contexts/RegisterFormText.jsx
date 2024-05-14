import { createContext, useContext, useState } from 'react';

const RegisterFormTextContext = createContext();

export const RegisterFormTextProvider = ({ children }) => {
  const [registerFormSmallText, setRegisterFormSmallText] = useState("");
  const [registerFormLargeText, setRegisterFormLargeText] = useState("")

  return (
    <RegisterFormTextContext.Provider value={{ registerFormSmallText, setRegisterFormSmallText, registerFormLargeText, setRegisterFormLargeText}}>
      {children}
    </RegisterFormTextContext.Provider>
  );
};

export const useRegisterFormText = () => {
  return useContext(RegisterFormTextContext);
};