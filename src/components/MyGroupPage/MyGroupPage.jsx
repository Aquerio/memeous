import { useLoaderData } from "react-router-dom"
import { useRouteHead } from "../../contexts/RouteHeadContext"
import Post from "../Post/Post"
import { useShowGrpInMenu } from "../../contexts/ShowGrpInMenuContext"

const MyGroupPage = () => {

    const { setShowGrpInMenu, menuBtns, setMenuBtns  } = useShowGrpInMenu()
    setShowGrpInMenu(true)
    setMenuBtns("mygroups")

    const posts = useLoaderData()
    const {routeHead, setRouteHead} = useRouteHead()
    setRouteHead("Group Posts")
  return (
    <div className="flex flex-col justify-center items-center w-[100%]">

    <h2 className="text-[#ffffff] text-[24px] font-bold py-[33px] ml-[60px]">{routeHead}</h2>
        <div className="flex flex-col gap-4 ">
    
       
    
          {posts.map(post => <Post key={post.saved_quantity} post={post}/>)}
        </div>
    
        </div>
  )
}

export default MyGroupPage