import Navigate from "../Navbar-components/navigate";
import { AiOutlineMenu } from "react-icons/ai";

import "./navbar.css";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const linksArr = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/products",
    text: "Products",
  },
  {
    link: "/certificate",
    text: "Certificate",
  },
  {
    link: "/contact",
    text: "Contact",
  },
  {
    link: "/about",
    text: "About",
  },
];

const Navbar = () => {
  const navigationRef = useRef();
  const activeClass = "active";

  const menuHandler = function (e) {
    navigationRef.current.classList.toggle("hide-nav");
  };

  const hideNavigationBarHandler = function (e) {
    if (e.target.closest(".navigate-column")) {
      navigationRef.current.className += " hide-nav";
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-flex">
        <NavLink to={'/'} className={"org-logo org-logo-TM"}>
          <img src="/imgs/citizentube_ind_logo.jpg" alt="logo" />
        </NavLink>
        <div className="menu--btn" onClick={menuHandler}>
          <AiOutlineMenu />
        </div>
        <div
          className="navigate-column hide-nav"
          onClick={hideNavigationBarHandler}
          ref={navigationRef}
        >
          {linksArr.map(({ link, text }, i) => (
            <Navigate
              key={i}
              text={text}
              link={link}
              activeClass={activeClass}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
