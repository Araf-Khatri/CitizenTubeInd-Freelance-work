import { NavLink } from "react-router-dom";
import "./navigate.css";

const Navigate = ({ text, link, activeClass }) => {
  return (
    <NavLink className={({ isActive }) => (isActive ? activeClass : "")} to={link}>
      {text}
    </NavLink>
  );
};

export default Navigate;
