
import LoginForm from "../LoginRegister/LoginForm"

import "./LoginPage.css"
import RegisterForm from "../LoginRegister/RegisterForm"

const LoginPage = () => {
 
 const name = "memeous"
 const paraText = "a place only for humorous content."
 
    return (

    
   <>

   <div className="mx-[350px]">

<div className="header text-center py-[67px] text-[#FFFFFF]">

     <h1 className="text-[64px] font-bold">{name}</h1>
     <p className="font-[16px]">{paraText}</p>

   </div>

   <div className="login_body flex justify-between w-[100%] items-center">
<div>

   <LoginForm/>
</div>
  
   <div className="vert_line h-[350px] w-[2px] bg-[#323232] opacity-45">

   

   </div>
   <div>
<RegisterForm/>
   </div>
    
   </div>

   </div>
   
   </>
  )
}

export default LoginPage