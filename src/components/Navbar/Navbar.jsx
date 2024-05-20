import { FiHome } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

import "./Navbar.css"





const Navbar = () => {
  
  return (
    <div className="text-[#ffffff] flex flex-col gap-14 max-w-[450px]">
      
      <div className="logo text-[48px]">
        <h1>memeous</h1>
        </div>
        <div className="menu text-xl flex flex-col gap-7">

        <NavLink to="">
  {({ isActive }) => (
    <div className={`menu_item ${isActive ? "active" : ""}`}>
      <p>
        <FiHome className='icon' />
      </p>
      <p>Home</p>
    </div>
  )}
  </NavLink>

  <NavLink to="chats">
  {({ isActive }) => (
    <div className={`menu_item ${isActive ? "active" : ""}`}>
      <p>
        < IoChatbubbleEllipsesOutline className='icon' />
      </p>
      <p>Chats</p>
    </div>
  )}
  </NavLink>

  <NavLink to="notifications">
  {({ isActive }) => (
    <div className={`menu_item ${isActive ? "active" : ""}`}>
      <p>
        < IoNotificationsOutline className='icon' />
      </p>
      <p>Notifications</p>
    </div>
  )}
  </NavLink>


  <NavLink to="search">
  {({ isActive }) => (
    <div className={`menu_item ${isActive ? "active" : ""}`}>
      <p>
        < IoMdSearch className='icon' />
      </p>
      <p>Search</p>
    </div>
  )}
  </NavLink>

  
        



        

        

        </div>
      </div>
  )
}

export default Navbar