import { useState } from "react";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const [cls,setCls]=useState("inactive")

  function openNav() {
    setActive(true)
    setCls("active")
    
  }
  function closeNav(){
    setActive(false)
    setCls("inactive")
  }
  return (
    <nav>
      <NavLink to="/"><img src={logo} alt="" /></NavLink>
      {/* <ul style={{ width: `${width}` }}> */}
      <ul className={cls} >
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/find">Find item</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/post">Post item</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about">About us</NavLink>
        </li>
      </ul>
      {active ? (
        <button className="menu-container" onClick={closeNav}>
          <CloseIcon className="menu close" />
        </button>
      ) : (
        <button className="menu-container" onClick={openNav}>
          <MenuIcon className="menu" />
        </button>
      )}
    </nav>
  );
}
export default Navbar;
