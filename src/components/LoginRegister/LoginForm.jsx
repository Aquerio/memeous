import React from 'react';

import { useSigninFormText } from '../../contexts/SigninFormTextContext';
import FormText from '../FormText/FormText';
import "./LoginRegister.css"




const LoginForm = () => {

  const { setSigninFormSmallText, setSigninFormLargeText, signinFormSmallText, signinFormLargeText } = useSigninFormText();
  setSigninFormLargeText("Log in to your Account")
  setSigninFormSmallText("Have an account?")
  return (

    <>

    <FormText formLargeText = {signinFormLargeText} formSmallText={signinFormSmallText}/>

   
  <form className="flex flex-col space-y-4">
   
  <input
        type="email"
        placeholder="Email"
      />
      <input
        type="password"
        placeholder="Password"
      />
      <button
        type="submit"
        className="w-full h-12 rounded-lg px-4 py-2 bg-orange-500 text-white font-bold hover:bg-orange-700"
      >
        Log In
      </button>

  </form>


    
     
   
    </>
    
  );
};

export default LoginForm;
