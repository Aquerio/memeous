import { NavLink, useLoaderData } from "react-router-dom"
import Post from "../Post/Post"
import { useRouteHead } from "../../contexts/RouteHeadContext"
import AddPost from "../Icons/AddPost"
import MyGroups from "../Icons/MyGroups"
import { useShowGrpInMenu } from "../../contexts/ShowGrpInMenuContext"

const GroupsComponen = () => {
  const { setShowGrpInMenu } = useShowGrpInMenu()
    setShowGrpInMenu(false)

  const {routeHead, setRouteHead} = useRouteHead()
    setRouteHead("Group")
    const posts = useLoaderData()
  return (
    <div className="flex flex-col justify-center items-center w-[100%]">

<h2 className="text-[#ffffff] text-[24px] font-bold py-[33px] ml-[60px]">{routeHead}</h2>

<div className="grid grid-cols-4 gap-4 mb-6 w-[360px] mx-auto px-2 ml-[250px]">
          <div className="flex flex-col items-center">

         
            <button className="rounded-lg flex flex-col items-center icon_btn">
             <AddPost/>
            </button>
        <span className="text-xs text-[#ffffff] tracking-tighter">Create Group</span>
          
          </div>
          <div className="flex flex-col items-center">
            <NavLink to='mygroups'>
            <button className="rounded-lg flex flex-col items-center icon_btn">
              <MyGroups/>
            </button>
            </NavLink>
            <span className="text-xs text-[#ffffff] tracking-tighter">My Groups</span>
         
          </div>
          <div className="flex flex-col items-center">
            <NavLink to='publicgroups'>

               <button className="rounded-lg flex flex-col items-center icon_btn">
             <MyGroups/>
            </button>
            </NavLink>
           
            <span className="text-xs text-[#ffffff] tracking-tighter">Public Groups</span>
         
          </div>
          <div className="flex flex-col items-center">
            <NavLink to='joinedgroups'>

<button className="rounded-lg flex flex-col items-center icon_btn">
              <MyGroups/>
            </button>

            </NavLink>
            
            <span className="text-xs text-[#ffffff] tracking-tighter	">Joined Groups</span>
          
          </div>
        </div>

        <h2 className="text-[20px] text-[#ffffff] font-semibold ml-[63px] pt-6 pb-12">Group posts</h2>

    <div className="flex flex-col gap-4 ">

   

      {posts.map(post => <Post key={post.saved_quantity} post={post}/>)}
    </div>

    </div>
  )
}

export default GroupsComponen