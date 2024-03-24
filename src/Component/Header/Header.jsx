import "./header.css";
import logo from "../../assets/khaledAssets/logo.png";
import NavItems from "./NavItems";

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
        <div className="btns flex">
          <button className="login">Login</button>
          <button className="signup">Signup</button>
        </div>
      </div>
    </header>
  );
};

export default Header;