import { useState } from "react";
import "./header.css";
import logo from "../../assets/khaledAssets/flogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const NavItems = (props) => {
  return <Link to={props.link}>{props.itemName}</Link>;
};

const Header = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className="header-k sticky-top bg-color-white z-99 bg-white" >
      <div className="container-k flex-k">
        <div className="logo-k">
          <img width="65%" src={logo} alt="Logo" />
        </div>
        {props.sign ? (
          <></>
        ) : (
          <div className="nav-items-k flex-k">
            <NavItems link={"/Home"} itemName="Home" />
            <NavItems link={"/courses"} itemName="Courses" />
            <NavItems link={"/dashboard"} itemName="Dashboard" />
          </div>
        )}
        <div className="burger-k">
          <FontAwesomeIcon
            icon={mobileMenu ? faTimes : faBars}
            className="burgerIcon-k"
            onClick={toggle}
          />
        </div>
        {props.sign ? (
          <div className="btns-k flex-k">
            <NavLink to="./signin">
              <button className="login-k">Login</button>
            </NavLink>
            <NavLink to="./signup">
              <button className="signup-k">Signup</button>
            </NavLink>
          </div>
        ) : (
          <div className="btns-k flex-k">
            <NavLink to="./signin">
              <button className="signup-k">Log out</button>
            </NavLink>
          </div>
        )}
      </div>
      {mobileMenu && (
        <div className="mobile-k">
          <div className="container-k">
            <div className="btnsMobile-k">
              {props.sign ? (
                <>
                  <NavLink to="./Signup">
                    <button className="signup-k">Signup</button>
                  </NavLink>
                  <NavLink to="./signin">
                    <button className="signup-k">Login</button>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="./home">
                    <button className="signup-k">Home</button>
                  </NavLink>
                  <NavLink to="./Courses">
                    <button className="signup-k">Courses</button>
                  </NavLink>
                  <NavLink to="./Dashboard">
                    <button className="signup-k">Dashboard</button>
                  </NavLink>
                  <NavLink to="./signin">
                    <button className="signup-k">Logout</button>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
