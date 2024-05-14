import { useRegisterFormText } from "../../contexts/RegisterFormText";

import FormText from "../FormText/FormText";
 import "./LoginRegister.css" 

const RegisterForm = () => {

  const { setRegisterFormSmallText, setRegisterFormLargeText, registerFormSmallText, registerFormLargeText } = useRegisterFormText();
  setRegisterFormLargeText("Create your account")
  setRegisterFormSmallText("Are you new?")
  return (

    <>


    <FormText formLargeText = {registerFormLargeText} formSmallText={registerFormSmallText}/>
 
    
     <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Display Name"
      />
      <input
        type="text"
        placeholder="Username"
      />
      <input
        type="password"
        placeholder="Password"
      />
      <input
        type="password"
        placeholder="Confirm Password"
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
