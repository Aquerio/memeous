import React from 'react';

import { useSigninFormText } from '../../contexts/SigninFormTextContext';
import FormText from '../FormText/FormText';
import "./LoginRegister.css"
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';




const LoginForm = () => {

  const { setSigninFormSmallText, setSigninFormLargeText, signinFormSmallText, signinFormLargeText } = useSigninFormText();
  setSigninFormLargeText("Log in to your Account")
  setSigninFormSmallText("Have an account?")

  const {setUser, logIn} = useAuth()
  const navigate = useNavigate()
   
  const userLogin = (e) => {
               
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    const email = form.get('email')
    const password = form.get('password')

    

    logIn(email, password)
    .then((userCredential) => {
      // Signed in 
      const userInfo = userCredential.user
      
      setUser(userInfo);
      navigate('/')
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage)
    });

  } 

  return (

    <>

    <FormText formLargeText = {signinFormLargeText} formSmallText={signinFormSmallText}/>

   
  <form className="flex flex-col space-y-4" onSubmit={userLogin}>
   
  <input
        type="email"
        placeholder="Email"
        name='email'
      />
      <input
        type="password"
        placeholder="Password"
        name='password'
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
