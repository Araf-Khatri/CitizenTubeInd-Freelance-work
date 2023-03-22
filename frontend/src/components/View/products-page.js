import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

import Section from "../section";
import PopUp from "../popup-window/popup";
import Footer from "./footer";
import "./products-page.css";
import DownloadBtn from "../product-component/download-brochure";

const ProductsPage = ({ products }) => {
  document.title = "Citizen Tube | Products";

  const [isPopupActive, setIsPopupActive] = useState(false);

  return (
    <Fragment>
      <div className="products-section">
        <h1 className="products-heading">Our Products</h1>
        <p className="products-heading-description">
          As a trader in the steel industry, we offer a wide range of products
          to our customers to meet their specific needs and requirements. Our
          product offerings include:
        </p>
        <DownloadBtn extraClass={" page-download--btn prod-btn-two"} />
        <Section>
          <div className="info-grid product-grid">
            {products.map(({ mainImage, productName, detail, link }, i) => {
              const addToRight = (
                <NavLink
                  to={`/products/${link}=${i}`}
                  className={`info-image--filter${
                    i % 2 === 0 ? " grid-up" : ""
                  } afterhover`}
                >
                  <img
                    className={`info--image`}
                    src={mainImage}
                    alt={productName + " image"}
                  />
                </NavLink>
              );
              const isEven = i % 2 === 0;
              return (
                <Fragment key={i}>
                  {!isEven && addToRight}
                  <div
                    className={`product-description-flex${
                      i % 2 === 0 ? " prod-btn--align-end" : ""
                    }`}
                  >
                    <div>
                      <NavLink
                        to={`/products/${link}=${i}`}
                        className="info--heading product-heading-link"
                      >
                        <h3>{productName}</h3>
                        <FiExternalLink className="link-icon" />
                      </NavLink>
                      <p className="prod-info--description">{detail}</p>
                    </div>
                    <div
                      className={`enquire-now--btn`}
                      onClick={() => setIsPopupActive(true)}
                    >
                      <p>Enquire Now</p>
                    </div>
                  </div>

                  {isEven && addToRight}
                </Fragment>
              );
            })}
          </div>
          {/* <button
            className="prod--btn download-brochure page-download--btn prod-btn-two"
            onClick={downloadBrochure}
          >
            Download Brochure
          </button> */}
          <DownloadBtn extraClass={" page-download--btn prod-btn-two"} />
        </Section>
      </div>
      {isPopupActive && <PopUp popupActive={setIsPopupActive} />}
      <Footer />
    </Fragment>
    // <div className="products-page--section">
    //   <Section classname="products-grid">
    //     {products.map(({ productName, mainImage, link }, i) => (
    //       <div className="product" key={i}>
    //         <NavLink to={`/products/${link}=${i}`} className="product-image">
    //           <img src={mainImage} alt={productName} />
    //         </NavLink>
    //         <NavLink className="product--btn">Enquire Now</NavLink>
    //       </div>
    //     ))}
    //   </Section>
    // </div>
  );
};

export default ProductsPage;
