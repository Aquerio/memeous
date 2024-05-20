import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { useRegisterFormText } from "../../contexts/RegisterFormText";

import FormText from "../FormText/FormText";
 import "./LoginRegister.css" 
import { useEffect, useState } from "react";

const RegisterForm = () => {

  const { setRegisterFormSmallText, setRegisterFormLargeText, registerFormSmallText, registerFormLargeText } = useRegisterFormText();
  setRegisterFormLargeText("Create your account")
  setRegisterFormSmallText("Are you new?")
  const {user, setUser, createUser} = useAuth()
  const navigate = useNavigate()

const registerUser = (e) => {

  e.preventDefault()

  const form = new FormData(e.currentTarget)

  const email = form.get('email')
  const displayName = form.get('displayName') 
  const password = form.get('password')
  const confPass = form.get('confPass')




  createUser(email, password)

  .then((userCredential) => {
    const userInfo = userCredential.user;


    // Update user profile with displayName and photoURL
     updateProfile(userInfo, {
     
      displayName: displayName
    

    })
    .then(() =>{ 
      
      

setUser(userInfo)
      
    
    }
  )
     

    
    
    if(user.displayName !== null) {navigate('/') }

    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.error(errorMessage)
    // ..
  });
} 

  return (

    <>


    <FormText formLargeText = {registerFormLargeText} formSmallText={registerFormSmallText}/>
 
    
     <form className="flex flex-col space-y-4" onSubmit={registerUser}>
      <input
        type="text"
        placeholder="Display Name"
        name="displayName"
        id="displayName"
        required
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        id="email"
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confPass"
        id="confPass"
        required
      />
      <button
        type="submit"
        className="w-full h-12 rounded-lg px-4 py-2 bg-orange-500 text-white font-bold hover:bg-orange-700"
       
      >
        Register
      </button>
    </form>
    </>
   
  );
};

export default RegisterForm;
