import "./header.css";
import logo from "../../assets/flogo.png"
import NavItems from "./NavItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <img width="65%" src={logo} alt="" />
        </div>
        <div className="nav-items flex">
          <NavItems itemName="Home" />
          <NavItems itemName="Courses" />
          <NavItems itemName="Blog" />
          <NavItems itemName="Events" />
          <NavItems itemName="Monitors" />
          <NavItems itemName="Testimonials" />
        </div>
        <div className="burger">
        <FontAwesomeIcon icon={faBars} className="burgerIcon" />
        </div>
        <div className="btns flex">
          <button className="login">Login</button>
          <button className="signup">Signup</button>
        </div>
      </div>
    </header>
  );
};

export default Header;