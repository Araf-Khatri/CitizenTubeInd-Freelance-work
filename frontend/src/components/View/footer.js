import {
  // FaPhoneSquareAlt,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import Section from "../section";
import "./footer.css";
import Navigate from "../Navbar-components/navigate";
import { Fragment, useState } from "react";
import PopUp from "../popup-window/popup";
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
    link: "/contact",
    text: "Contact",
  },
  {
    link: "/about",
    text: "About",
  },
];
const Footer = () => {
  const [activePopup, setActivePopup] = useState(false);
  const activeClass = "footer-active";
  return (
    <Fragment>
      <footer className="footer">
        <Section classname={"footer-info"}>
          <div className="footer--flex">
            <NavLink to={"/"} className={"org-logo-TM"}>
              <img src="/imgs/citizentube_ind_logo.jpg" alt={"logo"} />
            </NavLink>
            <div className="footer-navigation">
              {linksArr.map(({ link, text }, i) => (
                <Navigate
                  key={i}
                  text={text}
                  link={link}
                  activeClass={activeClass}
                />
              ))}
            </div>
            <button
              className="footer-btn"
              onClick={() => {
                setActivePopup(true);
              }}
            >
              ENQUIRE NOW
            </button>
          </div>
          <div className="footer-links">
            <a
              href="https://www.facebook.com/people/Citizen-Tube-Industries/100089631171947/?mibextid=ZbWKwL"
              className="link"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/citizen_tubeindustries/?igshid=ZDdkNTZiNTM%3D"
              target={"_blank"}
              rel="noreferrer"
              className="link"
            >
              <GrInstagram />
            </a>
            <a
              href="https://m.youtube.com/channel/UC63XKgHSwuupKmVA1HNYg_A"
              target={"_blank"}
              rel="noreferrer"
              className="link"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/citizen-tube-industries-b3b243264"
              target={"_blank"}
              rel="noreferrer"
              className="link"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </Section>
        <div className="copyright">
          <p>&#169; 2023 Citizencube Copyright All Right Reserved.</p>
        </div>
      </footer>
      {activePopup && <PopUp popupActive={setActivePopup} />}
    </Fragment>
  );
};

export default Footer;
