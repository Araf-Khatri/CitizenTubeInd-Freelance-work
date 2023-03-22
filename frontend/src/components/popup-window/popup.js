import ContactForm from "../contact-form/contact-form";
import "./popup.css";

const PopUp = ({ popupActive }) => {
  const closePopupHandler = (e) => {
    if (e.target.closest('.popup')) return
    popupActive(false)
  }

  return (
    <div className="popup-bg " onClick={closePopupHandler}>
      <ContactForm classname="popup" onclick={(e) => {
        console.log(e.target)
        popupActive(false)
      }} />
    </div>
  );
};

export default PopUp;
