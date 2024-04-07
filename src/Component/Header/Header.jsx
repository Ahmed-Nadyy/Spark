import { useState } from "react";
import "./header.css";
import logo from "../../assets/khaledAssets/flogo.png";
import NavItems from "./NavItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className="header-k">
      <div className="container-k flex-k">
        <div className="logo-k">
          <img width="65%" src={logo} />
        </div>
        <div className="nav-items-k flex-k">
          <NavItems itemName="Home" />
          <NavItems itemName="Courses" />
          <NavItems itemName="Blog" />
          <NavItems itemName="Events" />
          <NavItems itemName="Monitors" />
          <NavItems itemName="Testimonials" />
        </div>
        <div className="burger-k">
          <FontAwesomeIcon icon={mobileMenu ? faTimes : faBars} className="burgerIcon-k" onClick={toggle} />
        </div>
        <div className="btns-k flex-k">
          <button className="login-k">Login</button>
          <button className="signup-k">Signup</button>
        </div>
      </div>
      {mobileMenu && (
        <div className="mobile-k">
          <div className="container-k">
            <div className="mobileMenu-k" >
              <NavItems itemName="Home" />
              <NavItems itemName="Courses" />
              <NavItems itemName="Blog" />
              <NavItems itemName="Events" />
              <NavItems itemName="Monitors" />
              <NavItems itemName="Testimonials" />
            </div>
            <div className="btnsMobile-k">
              <button className="signup-k">Login</button>
              <button className="signup-k">Signup</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
