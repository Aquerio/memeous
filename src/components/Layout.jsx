import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import { AuthContextProvider } from "../contexts/AuthContext"
import { RouteHeadProvider } from "../contexts/RouteHeadContext"
import MenuSectionPersonal from "./MenuSectionPersonal/MenuSectionPersonal"
import { useShowGrpInMenu } from "../contexts/ShowGrpInMenuContext"
import GroupProfile from "./GroupProfile/GroupProfile"


    








function Layout () {
    const { showGrpInMenu } = useShowGrpInMenu()

return(

    <>
  
<div className="w-[1400px] mx-auto flex justify-between justify-self-center">

<AuthContextProvider>

   

       <Navbar/>


<RouteHeadProvider><Outlet/> </RouteHeadProvider>

{showGrpInMenu ? <GroupProfile/> : <MenuSectionPersonal/>}




</AuthContextProvider>
   </div>


   
    
    </>
)

}

export default Layout