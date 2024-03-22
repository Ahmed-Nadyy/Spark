import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo2 from "../../assets/stdDashboard/logo.png";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Overview");
  
  const handleLogoClick = () => {
    const menu=document.getElementById("menu");
    menu.style.transform = "translateX(0)";
    if (window.innerWidth > 685) {
      menu.style.transform = "translateX(0)";
    }

  };
  const handleLogo2Click = () => {
    const menu=document.getElementById("menu");
    if (window.innerWidth < 685) {
      menu.style.transform = "translateX(-100%)";
    }
  };
  const handleResize = () => {
    const menu = document.getElementById("menu");
    if (window.innerWidth > 685) {
      menu.style.transform = "translateX(0)";
    }
    else{
      menu.style.transform = "translateX(-100%)";
    }
  };
  
  window.addEventListener("resize", handleResize);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <>
    {/* <img className="logo" src={logo} alt="" /> */}
    <i className="fas fa-bars logo" onClick={handleLogoClick}></i>

      <div id="menu" className={`visible col-3 col-lg-2 position-fixed`}>
        <div className="menu-header ">
          <div className="menu-btn">
            <img className="w-100 logo2" src={logo2} alt="menu-icon" onClick={handleLogo2Click}/>
          </div>
        </div>
        <div className="menu-group mb-auto">
          <Link
            to="#"
            className={`menu-item ${
              activeItem === "Overview" ? "active" : ""
            } m-1`}
            onClick={() => handleItemClick("Overview")}
          >
            <i className="fas fa-tachometer-alt"></i>
            &nbsp;
            <span>Overview</span>
          </Link>
          <Link
            to="#"
            className={`menu-item ${
              activeItem === "Tasks" ? "active" : ""
            } m-1`}
            onClick={() => handleItemClick("Tasks")}
          >
            <i className="fas fa-tasks"></i>
            &nbsp;
            <span>Tasks</span>
          </Link>
          <Link
            to="#"
            className={`menu-item ${
              activeItem === "MyCourses" ? "active" : ""
            } m-1`}
            onClick={() => handleItemClick("MyCourses")}
          >
            <i className="fas fa-book"></i>
            &nbsp;
            <span>My Courses</span>
          </Link>
          <Link
            to="#"
            className={`menu-item ${
              activeItem === "Groups" ? "active" : ""
            } m-1`}
            onClick={() => handleItemClick("Groups")}
          >
            <i className="fas fa-users"></i>
            &nbsp;
            <span>Groups</span>
          </Link>
        </div>
        <div className="menu-group setting w-75">
          <Link
            to="#"
            className={`logout m-1 text-black`}
            onClick={() => handleItemClick("Settings")}>
            <i className="fas fa-cog"></i>
            &nbsp;
            <span>Settings</span>
          </Link>
          <Link to="#" className=" logout m-1" style={{ color: "red" }}>
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Logout</span>
          </Link>
        </div>
        </div>
      </>
  );
}

export default Sidebar;