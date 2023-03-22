import { Fragment, useState } from "react";
import {
  FaRegCheckSquare,
  FaRegEdit,
  FaRegEnvelopeOpen,
  FaRegMap,
} from "react-icons/fa";

import AboutUs from "../home-components/about-us";
import Info from "../home-components/info";
import Review from "../home-components/review";
import PopUp from "../popup-window/popup";
import Section from "../section";
import Footer from "./footer";
import "./home-page.css";

const HomePage = () => {
  const [activatePopup, setActivatePopup] = useState(false);
  document.title = "Citizen Tube";
  const infoArr = [
    {
      image: "/imgs/citizentube--img1.png",
      heading: "Citizen Tube Industries",
      description:
        "Citizen tube industry established in 1992, is one of the prominent and leading ISO-certified Indian company that manufacture and supply high-strength steel products for the past 30 years. CTI successfully and devotedly supplies a large number of steel products that include mild steel pipes, stainless steel sheets, nuts, bolts, beams, angle, stainless steel pipes, and can supply multiple customized steel products.",
    },
    {
      image: "/imgs/citizentube--img2.jpg",
      heading: "Why Choose CTI ?",
      description:
        "CTI is one of the most reliable and well-known steel industry in India and has earned the trust and support of our customers on a national and international level by supplying advanced high-end steel products. There is an important test conducted on steel products to test the mechanical attainment of steel. Steel products are evaluated based on their yield point, tensile strength, and elongation percentage so that our customers won't have to compromise on the quality they want.",
    },
  ];

  const reviewsArr = [
    {
      review:
        "In our search for steel products of sufficient quality, we encountered several challenges. Citizen Tube Industry ends our quest as soon as we begin sourcing from them. Their product performance is far superior to others.",
      place: "Mumbai",
      company: "Metal industrial corporation",
      rating: 5,
    },
    {
      review:
        "In our search for steel products of sufficient quality, we encountered several challenges. Citizen Tube Industry ends our quest as soon as we begin sourcing from them. Their product performance is far superior to others.",
      place: "Raipur",
      company: "Venus pipes and fittings",
      rating: 5,
    },
    {
      review:
        "In our search for steel products of sufficient quality, we encountered several challenges. Citizen Tube Industry ends our quest as soon as we begin sourcing from them. Their product performance is far superior to others.",
      place: "Kolkata",
      company: "Asian metal corporation",
      rating: 5,
    },
  ];

  const serviceDetails = [
    {
      icon: <FaRegCheckSquare />,
      name: "Delivery and logistics",
      description:
        "Offer delivery and logistics services to ensure timely and efficient delivery of products to customers.",
    },
    {
      icon: <FaRegEdit />,
      name: "Technical support",
      description:
        "Provide technical support to customers to help them choose the right products for their applications.",
    },
    {
      icon: <FaRegEnvelopeOpen />,
      name: "Quality assurance",
      description:
        "Offer inspection and quality assurance services to ensure that customers receive products that meet their specifications and expectations.",
    },
    {
      icon: <FaRegMap />,
      name: "Value-added services",
      description:
        "Offer value-added services such as kitting, packaging, and labeling to help customers streamline their operations and reduce costs.",
    },
  ];

  return (
    <Fragment>
      <div className="home-section">
        <div className={"home-section--card-view"}>
          <Section classname="home-section--card">
            <div className="home-card">
              <div className="home-card--description">
                <p>
                  Your Reliable Exporter And Supplier Of High Strength Steel
                  Products.
                </p>
              </div>
              <button
                onClick={() => {
                  setActivatePopup(true);
                }}
              >
                Enquire Now
              </button>
            </div>
          </Section>
        </div>
        <Info infoArr={infoArr} />

        <div className="services-section">
          <Section classname={"service--main"}>
            <h1>We are ISO Certified by "TUV Austria"</h1>
            <h2>EN ISO 9001</h2>
            <h3>Certificate No. 20100223015588</h3>
            {/* <div className="services-section--heading">
              <h1 className="services--heading">Our Services</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="services-all">
              {serviceDetails.map(({ icon, name, description }, i) => (
                <Service
                  iconElement={icon}
                  name={name}
                  description={description}
                  key={i}
                />
              ))}
            </div> */}
          </Section>
        </div>

        <div className="reviews-section">
          <Section classname={"reviews-margin"}>
            <div className="reviews-section-heading">
              <h2>Here is what our clients say about Citizen Tube Industry</h2>
            </div>
            <div className="reviews-scroll">
              <div className="reviews-flex">
                {reviewsArr.map(({ review, place, company, rating }, i) => (
                  <Review
                    key={i}
                    review={review}
                    place={place}
                    company={company}
                    rating={rating > 5 ? 5: rating}
                  />
                ))}
              </div>
            </div>
          </Section>
        </div>
        <AboutUs />
      </div>
      <Footer />
      {activatePopup && <PopUp popupActive={setActivatePopup} />}
    </Fragment>
  );
};

export default HomePage;
