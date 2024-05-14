import { createContext, useContext, useState } from 'react';

const SigninFormTextContext = createContext();

export const SigninFormTextProvider = ({ children }) => {
  const [signinFormSmallText, setSigninFormSmallText] = useState("");
  const [signinFormLargeText, setSigninFormLargeText] = useState("")

  return (
    <SigninFormTextContext.Provider value={{ signinFormSmallText, setSigninFormSmallText,signinFormLargeText, setSigninFormLargeText}}>
      {children}
    </SigninFormTextContext.Provider>
  );
};

export const useSigninFormText = () => {
  return useContext(SigninFormTextContext);
};