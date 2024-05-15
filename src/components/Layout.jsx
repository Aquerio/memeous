import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import { AuthContextProvider } from "../contexts/AuthContext"








function Layout () {

return(

    <>
  
<div className="w-[1280px] mx-auto">

<AuthContextProvider>
<Navbar/>


<Outlet/>

</AuthContextProvider>
   </div>


   
    
    </>
)

}

export default Layout