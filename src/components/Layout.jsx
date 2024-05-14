import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"








function Layout () {

return(

    <>
  
<div className="w-[1280px] mx-auto">
<Navbar/>


<Outlet/>


   </div>


   
    
    </>
)

}

export default Layout