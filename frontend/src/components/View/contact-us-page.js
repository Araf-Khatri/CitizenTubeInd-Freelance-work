import { IoLocationSharp } from "react-icons/io5";
import {
  FaPhoneSquareAlt,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";
import { MdMail } from "react-icons/md";

import Section from "../section";

import "./contact-us-page.css";
import ContactForm from "../contact-form/contact-form";

const ContactUsPage = () => {

  document.title = "Citizen Tube | Contact";

  const followLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/people/Citizen-Tube-Industries/100089631171947/?mibextid=ZbWKwL",
    },
    {
      icon: <GrInstagram />,
      link: "https://www.instagram.com/citizen_tubeindustries/?igshid=ZDdkNTZiNTM%3D",
    },
    {
      icon: <FaYoutube />,
      link: "https://m.youtube.com/channel/UC63XKgHSwuupKmVA1HNYg_A",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/citizen-tube-industries-b3b243264",
    },
  ];


  return (
    <div className="contact-us--page">
      <Section classname="contact-us-information">
        <div className="contact-us--address">
          <div className="get-in-touch--section contact-us">
            <div className="contact-heading">
              <p>Get In Touch</p>
              <div></div>
            </div>
            <div className="get-in-touch--description">
              <div className="get-in-touch-info">
                <IoLocationSharp />
                <a
                  target={"_blank"}
                  href="https://www.google.com/maps/place/Dockyard+Rd+%26+Copper+Smith+St,+Dockyard,+Wadi+Bandar,+Mazgaon,+Mumbai,+Maharashtra+400010/@18.9675497,72.8425611,16.39z/data=!4m6!3m5!1s0x3be7ce49f8cd6b7b:0xc86237e9f301f918!8m2!3d18.9674722!4d72.8455452!16s%2Fg%2F11hb47m9jr?hl=en-GB"
                  rel="noreferrer"
                >
                  P/No. 345 S/No. 4 Copper Smith Street, Dockyard Rd Mumbai,
                  Maharashtra 400010.
                </a>
              </div>
              <div className="get-in-touch-info">
                <FaPhoneSquareAlt />
                <p>+91 98194 10413</p>
              </div>
              <div className="get-in-touch-info">
                <FaPhoneSquareAlt />
                <p>+91 98926 19501</p>
              </div>
              <div className="get-in-touch-info">
                <MdMail />
                <a
                  // change it to official email
                  href="mailto:abc@example.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  contact@citizentubeind.com
                </a>
              </div>
            </div>
          </div>
          <div className="contact-us find-us">
            <div className="contact-heading">
              <p>Find Us</p>
              <div></div>
            </div>
            <a
              href="https://www.google.com/maps/place/Dockyard+Rd+%26+Copper+Smith+St,+Dockyard,+Wadi+Bandar,+Mazgaon,+Mumbai,+Maharashtra+400010/@18.9675497,72.8425611,16.39z/data=!4m6!3m5!1s0x3be7ce49f8cd6b7b:0xc86237e9f301f918!8m2!3d18.9674722!4d72.8455452!16s%2Fg%2F11hb47m9jr?hl=en-GB"
              target={"_blank"}
              rel="noreferrer"
              className="location-img-main"
            >
              <img
                className="location-img"
                src="/imgs/location.png"
                alt="map location"
              />
              <button>View larger map</button>
            </a>
          </div>
          <div className="contact-us follow-us">
            <div className="contact-heading">
              <p>Follow Us</p>
              <div></div>
            </div>
            <div className="follow-us--links">
              {followLinks.map(({ icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target={"_blank"}
                  className="follow-link"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <ContactForm />
        {/* <div className="contact-us-form">
          <div className="contact-us--form-heading">
            <h2>Contact Us</h2>
            <p>We will reach out to you soon</p>
          </div>
          <form
            onSubmit={formSubmitHandler}
            className={"contact-us--form-main"}
          >
            <div className="input">
              <label htmlFor="name">
                First Name<span className="required"> *</span>
              </label>
              <input
                id={"name"}
                type={"text"}
                required
                placeholder={"John"}
                ref={nameInput}
              />
            </div>
            <div className="input">
              <label htmlFor="email">
                Email Address<span className="required"> *</span>
              </label>
              <input
                id="email"
                type={"email"}
                required
                placeholder={"abc@example.com"}
                ref={emailInput}
              />
            </div>
            <div className="input">
             
              <ReactPhoneInput
                inputExtraProps={{
                  name: "Phone Number",
                  required: true,
                  // autoFocus: true,
                }}
                defaultCountry={"sg"}
                ref={phoneNoInput}
              />
            </div>
            <div className="input">
              <label htmlFor="message">Message</label>
              <textarea
                onChange={(e) => {
                  setInputLength(e.target.value.length);
                }}
                maxLength={"180"}
                placeholder="Enter your message..."
                ref={messageInput}
              ></textarea>
              <p className="input-length">{inputLength}/180</p>
            </div>
            <button type="submit" className="form-btn">
              Send Message
            </button>
          </form>
        </div> */}
      </Section>
    </div>
  );
};

export default ContactUsPage;
