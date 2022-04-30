import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuBar from './img/Menubar.png'
import Form from './img/Form.png'
import List from './img/List.png'

const Navigation = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = (e) => {
    e.preventDefault();
    // if (isOpen) {
    //   setIsOpen(false);
    // } else {
    //   setIsOpen(true);
    // }

    // setIsOpen(isOpen ? false : true);

    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <div className="flex">
      <div
        className="bg-gray-800 text-white p-5 h-[100vh]"
        style={{ width: isOpen ? "200px" : "65px" }}
      >
        <div>
          <button onClick={toggleSideBar}><img className="min-w-[30px] w-[30px]" src={MenuBar} /></button>
        </div>
        <div className="flex flex-col">
          <div className="flex pt-[20px]">
            <NavLink to='/form'>
            <div><img className="w-[20px] mr-3" src={Form}/></div>
            </NavLink>
            {isOpen && (
              <NavLink
                to="/form"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : undefined
                }
              >
                Form
              </NavLink>
            )}
          </div>
          <div className="flex pt-[20px]">
            <NavLink to='/list'><div><img className="w-[20px] mr-3" src={List} /></div></NavLink>
            {isOpen && (
              <NavLink
                to="/list"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : undefined
                }
              >
                List
              </NavLink>
            )}
          </div>
        </div>
      </div>
      <main className="w-[100%]">{children}</main>
    </div>
  );
};

export default Navigation;
