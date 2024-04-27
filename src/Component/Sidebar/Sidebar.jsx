import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo2 from "../../assets/stdDashboard/logo.png";
import logo from "../../assets/stdDashboard/Frame.png";
import pic from "../../assets/stdDashboard/WhatsApp Image 2024-02-26 at 00.13.47_cc9ce5b8.jpg";
import ToDo from "../ToDo/ToDo";
function Sidebar() {
  const [activeItem, setActiveItem] = useState("Overview");
  const [check, setcheck] = useState(false);
  const [toggle, settoggle] = useState(false);
  const handleLogoClick = () => {
    const menu = document.getElementById("menu");
    menu.style.transform = "translateX(0)";
    if (window.innerWidth > 685) {
      menu.style.transform = "translateX(0)";
      setcheck(false);
    }
    else if (window.innerWidth < 685) {
      if (toggle) {
        menu.style.transform = "translateX(0%)";
        settoggle(!toggle);
      }
      else if (!toggle) {
        menu.style.transform = "translateX(-100%)";
        settoggle(!toggle);
      }
      setcheck(true);
    }
  };
  // const handleLogo2Click = () => {
  //   const menu=document.getElementById("menu");
  //   if (window.innerWidth < 685) {
  //     menu.style.transform = "translateX(-100%)";

  //   }
  // };
  const handleResize = () => {
    const menu = document.getElementById("menu");
    if (window.innerWidth > 685) {
      menu.style.transform = "translateX(0%)";
      setcheck(false);
    }
    else {
      menu.style.transform = "translateX(-100%)";
      setcheck(true);
    }
  };
  useEffect(() => {
    handleResize()
  }, [check])
  window.addEventListener("resize", handleResize);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <>
      {/* <div className="container col-3 align-items-end">
        <i className="fas fa-bars settingicon" onClick={handleLogoClick} style={{ display: check ? 'flex' : 'none' }}></i>
      </div> */}
      <div id="menu" className={`col-2 align-items-end`}>
        {/* <div className="menu-header ">
          <div className="menu-btn">
             <img className="w-100 logo2" src={logo2} alt="menu-icon" onClick={handleLogoClick}/> 
          </div>
        </div> */}

        <div className={`position-relative`} style={{ display: check ? 'block' : 'none' }}>
          <div className="text-center w-100 mt-0">
            <div className="profile mt-4 mx-auto"><img className="imag" src={pic} alt="" /></div>
            <div className="mt-2">
              <b>good Morning Prashant</b>
            </div>
            <div className="opacity-75 im-txt">
              continue your journey and achieve Your Target
            </div>
            <div className="position-relative mt-3">
              <Link className="text-decoration-none text-black position-relative mx-3">
                <i className="fa-regular fa-bell "></i>
                <div className="noti position-absolute badge p-1 mb-3">5</div>
              </Link>
              <Link className="text-decoration-none text-black mx-3">
                <i className="fa-solid fa-pen-to-square" />
              </Link>
            </div>
          </div>
          <ToDo />
        </div>
        <div className="menu-group ">
          <Link
            to="/Dashboard"
            className={`menu-item ${activeItem === "Overview" ? "active" : ""
              } m-1`}
            onClick={() => handleItemClick("Overview")}
          >
            <i className="fas fa-tachometer-alt"></i>
            &nbsp;
            <span>Overview</span>
          </Link>
          <Link
            to="/Quizzies"
            className={`menu-item ${activeItem === "Tasks" ? "active" : ""
              } m-1`}
            onClick={() => handleItemClick("Tasks")}
          >
            <i className="fas fa-tasks"></i>
            &nbsp;
            <span>Quizzies</span>
          </Link>
          <Link
            to="/courses"
            className={`menu-item ${activeItem === "MyCourses" ? "active" : ""
              } m-1`}
            onClick={() => handleItemClick("MyCourses")}
          >
            <i className="fas fa-book"></i>
            &nbsp;
            <span>My Courses</span>
          </Link>
          <Link
            to="#"
            className={`menu-item ${activeItem === "Groups" ? "active" : ""
              } m-1`}
            onClick={() => handleItemClick("Groups")}
          >
            <i className="fas fa-users"></i>
            &nbsp;
            <span>Groups</span>
          </Link>
          <Link
            to="#"
            className={`menu-item m-1  ${activeItem === "Settings" ? "active" : ""
              } m-1`}
            onClick={() => handleItemClick("Settings")}>
            <i className="fas fa-cog"></i>
            &nbsp;
            <span>Settings</span>
          </Link>
        </div>
        <div className="mb-3 ">
          
        </div>
      </div>
    </>
  );
}

export default Sidebar;