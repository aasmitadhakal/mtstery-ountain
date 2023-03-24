import React from 'react';
import {AiFillCaretDown} from "react-icons/ai";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose} from "react-icons/ai"
import { NavLink } from "react-router-dom";
const activeRouteCss = "text-[#1abc9c]";
const activetoggleCss = "text-[#1abc9c]/100";
const routes = [
  {
    name: "Destination",
    submenus: [
      {
        name: "Redux",
        path: "/redux",
      },
      {
        name: "nepal",
        path: "/materialui",
      },
      {
        name: "nepal",
        path: "/text",
      },
    ],
  },
  {
    name: "Asmita Family",
    submenus: [
      {
        name: "dashiram dhakal",
        path: "/home",
      },
      {
        name: "dilu dhakal",
        path: "/header",
      },
      {
        name: "bibek",
        path: "/header",
      },
      {
        name: "gallery",
        path: "/gallery",
      },
    ],
  },
  {
    name: "Asmita Family",
    submenus: [
      {
        name: "dashiram dhakal",
        path: "/header",
      },
      {
        name: "dilu dhakal",
        path: "/side",
      },
      {
        name: "bibek",
        path: "/header",
      },
      {
        name: "rita",
        path: "/header",
      },
    ],
  },
  {
    name: "Asmita Family",
    submenus: [
      {
        name: "dashiram dhakal",
        path: "/header",
      },
      {
        name: "dilu dhakal",
        path: "/header",
      },
      {
        name: "bibek",
        path: "/header",
      },
      {
        name: "rita",
        path: "/header",
      },
    ],
  },
  
];

const SideItem = ({ routeObj }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
 
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  return routeObj.submenus ? (
   
    <div className={`w-full  h-full   `} onClick={toggleSubMenu}>
     
      <div className=''>
      <div className=" grid grid-cols-2 gap-6 ">
       
        <div><span className=''> {routeObj.name}</span></div>
        <div className='mt-2' ><span  >{<AiFillCaretDown />}</span></div>
      </div>
      {showSubMenu && (
        <div>
          {routeObj.submenus.map((submenu, index) => {
            return (
              <NavLink
              className="block  space-y-4 md:space-y-0  md:text-white  p-2 rounded"
                to={submenu.path} 
              >
                 <span>{submenu.name}</span>
              </NavLink>
            );
          })}
        </div>
      )}
      </div>
    </div>
  ) : (
    <NavLink
      to={routeObj.path}
    >
      <span>{routeObj.name}</span>
    </NavLink>
  );
};

function Navbar() {
  const [toggle,setToggle]=useState(true)
  return (
    <div className='md:flex md:justify-between  block md:bg-blue-900'>
       
      <div className='flex bg-blue-900   justify-around'>
      
        <div className='h-16 mt-2 mb-2 w-64 bg-white'><img src='logo.png'></img></div>
     <div className='text-4xl font-bold  text-white md:hidden block mt-4 '> <span  onClick={()=>setToggle(!toggle)}>< AiOutlineMenu/></span></div>
      </div>
      {toggle &&(
       <div className="grid md:grid-cols-4 md:grid geid-cols-1 md:bg-blue-900 md:text-white  bg-blue-900 text-white  transition duration-150 ease-out md:ease-in justify-center align-center   space-y-4 md:space-y-0 p-5  ">
          {routes.map((route, index) => {
            return <SideItem routeObj={route}  />;
          })}
        </div>
      )}
    </div>
  )
}

export default Navbar