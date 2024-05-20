import { useEffect, useState } from "react";
import AddPost from "../Icons/AddPost";
import ManagerOptions from "../Icons/ManagerOptions";
import Settings from "../Icons/Settings";
import SignOut from "../Icons/SignOut";
import { useShowGrpInMenu } from "../../contexts/ShowGrpInMenuContext";
import JoinGroup from "../Icons/JoinGroup";
import Leave from "../Icons/Leave";

const GroupProfile = () => {

    const {menuBtns} = useShowGrpInMenu()

    const [grpInfo, setGrpInfo] = useState({})

    useEffect(() => {

        fetch('/groupInfo.json')
      .then(response => response.json())
      .then(json => setGrpInfo(json))
    },[grpInfo])


  return (
    <div className="text-white min-h-screen flex flex-col items-center py-[35px] px-4 w-[662px]">
      <div className="w-full max-w-sm rounded-lg shadow-lg">
       
      <div className="flex justify-between items-center mb-9">
          <div className="text-xl font-bold">menu</div>
          <div className="flex space-x-2 rounded-lg postSignOutBtn">
            <button className="bg-transparent p-2">
              <AddPost />
            </button>
            <button className="bg-transparent p-2">
              <SignOut />
            </button>
          </div>
        </div>

        <div className="flex items-center mb-6 w-[93%]">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <div className="flex-1">
            <div><p className="font-bold text-xl">{grpInfo.groupName}</p></div>
          </div>
          
        </div>

          <div className="w-[83%] text-[#828282]">
            <p className="text-[#FF874A]">{grpInfo.memberCount} Members</p>
            <p>Topic : {grpInfo.topic}</p>
            <p>Language : {grpInfo.language}</p>
            <p className="mt-4 mb-6">Info : {grpInfo.info}</p>
          </div>

          <div className="flex flex-col gap-4">

          {menuBtns === 'publicgroups' ? (
       
       <button className="w-[360px] p-4 rounded-lg bg-[#1C1C1C] flex items-center pl-6 space-x-2 mx-auto text-[#00FF19]">
       <JoinGroup/>
    <span>Join Group</span>
  </button>
      ) : menuBtns === 'joinedgroups' ? (
<>
        <button className="w-[360px] p-4 rounded-lg bg-[#1C1C1C] flex items-center pl-6 space-x-2 mx-auto text-[#FF874A]">
             <AddPost/>
          <span>Add Group Post</span>
        </button>
        <button className="w-[360px] p-4 rounded-lg bg-[#1C1C1C] flex items-center pl-6 space-x-2 mx-auto text-[#FF0000]">
        <Leave/>
          <span>Leave Group</span>
        </button>
      </> 
      ) : (
        <>
         <button className="w-[360px] p-4 rounded-lg bg-[#1C1C1C] flex items-center pl-6 space-x-2 mx-auto text-[#FF874A]">
             <AddPost/>
          <span>Add group post</span>
        </button>
        <button className="w-[360px] p-4 rounded-lg bg-[#1C1C1C] flex items-center pl-6 space-x-2 mx-auto">
        <Settings/>
          <span>Settings</span>
        </button>
        <button className="w-[360px] p-4 rounded-lg bg-[#1C1C1C] flex items-center pl-6 space-x-2 mx-auto">
        <ManagerOptions/>
          <span>Manager Options</span>
        </button>
     </>   
      )}

            

          </div>
        
       
      </div>
    </div>
  );
}

export default GroupProfile;
