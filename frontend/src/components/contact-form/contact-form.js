import { useRef, useState } from "react";
import ReactPhoneInput from "react-phone-input-2";
import "./contact-form.css";
import { RxCross2 } from "react-icons/rx";

import axios from "axios";

const ContactForm = ({ classname = "", onclick = () => {} }) => {
  const [isLoading, setIsLoading] = useState(null);
  const [inputLength, setInputLength] = useState(0);
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneNoInput = useRef();
  const messageInput = useRef();

  const formSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const name = nameInput.current.value;
      const email = emailInput.current.value;
      const phoneNo = phoneNoInput.current.state?.formattedNumber;
      const message = messageInput.current.value;

      // const url = "http://127.0.0.1:4090/send-mail";
      const url = "/send-mail";
      const data = {
        name,
        email,
        phoneNumber: phoneNo,
        message,
      };
      await axios.post(url, data);

    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(null);
  };

  return (
    <div className={`contact-us-form ${classname}`}>
      {!classname && (
        <div className="contact-us--form-heading">
          <h2>Contact Us</h2>
          <p>We will reach out to you soon</p>
        </div>
      )}
      {classname && (
        <div className="cancel-pop--btn" onClick={onclick}>
          <RxCross2 />
        </div>
      )}
      <form onSubmit={formSubmitHandler} className={"contact-us--form-main"}>
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
          {/* <label htmlFor="phone-number">Phone Number</label> */}
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
        <button type="submit" className="form-btn" disabled={isLoading}>
          {isLoading ? "Please wait..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
