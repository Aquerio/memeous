import { useEffect } from "react"
import "./HomePage.css"
import { useLoaderData } from "react-router-dom"
import { useRouteHead } from "../../contexts/RouteHeadContext"
import Post from "../Post/Post"
import { useAuth } from "../../contexts/AuthContext"
import { useShowGrpInMenu } from "../../contexts/ShowGrpInMenuContext"
const HomePage = () => {
    const {routeHead, setRouteHead} = useRouteHead()
    setRouteHead("Feed")
    const posts = useLoaderData()
    const {user} = useAuth()
    const { setShowGrpInMenu } = useShowGrpInMenu()
    setShowGrpInMenu(false)

    useEffect(() => {console.log(user)},[user])
    
  return (
    <>
    <div className="flex flex-col justify-center items-center w-[100%]">

<h2 className="text-[#ffffff] text-[24px] font-bold py-[33px] ml-[60px]">{routeHead}</h2>
    <div className="flex flex-col gap-4 ">

   

      {posts.map(post => <Post key={post.saved_quantity} post={post}/>)}
    </div>

    </div>
 

    

       
        
        </>
    
  )
}

export default HomePage