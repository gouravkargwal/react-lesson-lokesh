import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
        className="bg-black text-white p-5 h-[100vh]"
        style={{ width: isOpen ? "200px" : "45px" }}
      >
        <div>
          <button onClick={toggleSideBar}>SI</button>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div>😀</div>
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
          <div className="flex">
            <div>😀</div>
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
      <main className="p-2">{children}</main>
    </div>
  );
};

export default Navigation;
