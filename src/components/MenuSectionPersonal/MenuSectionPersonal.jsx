import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AddPost from "../Icons/AddPost";
import CoinSvg from "../Icons/CoinSvg";
import Community from "../Icons/Community";
import Edit from "../Icons/Edit";
import MemeousXd from "../Icons/MemeousXd";
import MyGroups from "../Icons/MyGroups";
import Redeem from "../Icons/Redeem";
import SavedPost from "../Icons/SavedPost";
import Settings from "../Icons/Settings";
import SignOut from "../Icons/SignOut";
import TemplateHub from "../Icons/TemplateHub";
import "./MenuSectionPersonal.css";

const MenuSectionPersonal = () => {
  const defUserName = "Michael Scott"
  const {user} = useAuth()
  return (
    <div className="text-white min-h-screen flex flex-col items-center py-[35px] px-4 w-[522px]">
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
            <div><p className="font-bold text-xl">{user? user?.displayName : defUserName}</p></div>
          </div>
          <button className="p-1">
            <Edit />
          </button>
        </div>
        <div className="mb-10 w-[83%] pr-3 mx-auto">
          <div className="flex justify-between">
            <span>Estimated reward amount:</span>
            <span>$69.00</span>
          </div>
          <div className="flex justify-between">
            <span>Qcoin Balance:</span>
            <span>3102</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-6 w-[360px] mx-auto px-2">
          <div className="flex flex-col items-center">

            <NavLink to='groups'>
            <button className="rounded-lg flex flex-col items-center icon_btn">
             <MyGroups/>
            </button>
            </NavLink>
            <span className="text-xs">My Groups</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-lg flex flex-col items-center icon_btn">
              <TemplateHub/>
            </button>
            <span className="text-xs">Template Hub</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-lg flex flex-col items-center icon_btn">
             <Community/>
            </button>
            <span className="text-xs">Community</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-lg flex flex-col items-center icon_btn">
              <SavedPost/>
            </button>
            <span className="text-xs">Saved Posts</span>
          </div>
        </div>
        <div className="grid grid-cols-3 w-[280px] mx-auto mb-9">
          <div className="flex flex-col items-center">
            <button className="rounded-lg flex flex-col items-center icon_btn">
             <CoinSvg/>
            </button>
            <span className="text-xs">Buy Qcoins</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-lg flex flex-col items-center icon_btn">
              
                <MemeousXd/>
            </button>
            <span className="text-xs">MemeousXD</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-lg flex flex-col items-center icon_btn">
              <Redeem/>
            </button>
            <span className="text-xs">Redeem</span>
          </div>
        </div>
        <button className="w-[360px] p-4 rounded-lg bg-[#1C1C1C] flex items-center pl-6 space-x-2 mx-auto">
          <Settings/>
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default MenuSectionPersonal;
