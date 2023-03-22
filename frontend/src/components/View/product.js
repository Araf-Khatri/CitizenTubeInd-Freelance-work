import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiArrowLeft } from 'react-icons/hi'
import ProductDetails from "../product-component/product-details";
import Section from "../section";
import Footer from "./footer";
import PopUp from "../popup-window/popup";
import DownloadBtn from "../product-component/download-brochure";

import "./product.css";

const Product = ({
  product: {
    productName,
    // detail,
    // type,
    prodType,
    typesAndDetails,
    size,
    thickness,
    prodClass,
    extra,
  },
}) => {
  document.title = "Citizen Tube | " + productName;
  const [isPopupActive, setIsPopupActive] = useState(false);

  return (
    <div className="main-product">
      <h1>{productName}</h1>
      <Section classname="back-btn--section">
        <NavLink to={"/products"} className={'back-btn'}>
          <HiArrowLeft />
        </NavLink>
      </Section>

      <Section classname={"product-details"}>
        <ProductDetails
          thickness={thickness}
          size={size}
          prodClass={prodClass}
          typesAndDetails={typesAndDetails}
          prodType={prodType}
          extra={extra}
        />
        {extra && (
          <ul>
            {extra.map((point, i) => {
              const [head, para] = point.split(": ");
              return (
                <li>
                  <h4 className="extra-point--heading">{head}:</h4>
                  {para}
                </li>
              );
            })}
          </ul>
        )}
      </Section>
      <Section classname={"product-buttons"}>
        <button
          className="prod--btn prod-Quote--btn"
          onClick={() => {
            setIsPopupActive(true);
          }}
        >
          Get Quote
        </button>
        <DownloadBtn />
      </Section>
      {isPopupActive && <PopUp popupActive={setIsPopupActive} />}

      <Footer />
    </div>
  );
};
export default Product;
