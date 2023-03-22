import { Fragment } from "react";
import Section from "../section";
import "./about-page.css";
import Footer from "./footer";

const AboutPage = () => {
  document.title = "Citizen Tube | About";

  const aboutArr = [
    {
      heading: "Company Profile",
      infos: [
        "Introducing you to one of the leading and prominent ISO-certified Indian steel company with a track record of success, achievement, and considerable progress in the steel industry in India.",
        "Citizen Tube Industries was established in 1992 and have already helped several customers in India and abroad for the past 3 decades to provide them with the best steel quality they want.",
        "Since CTI is the number one priority of our customers on a national and international level we are delighted to tell you the factual reason behind our tremendous success and experience that how we have earned and built customer's trust in the past 30 years.",
      ],
    },
    {
      heading: "Our Core Values",
      infos: [
        "With thirty years of experience as a leading steel industry in India, CTI has always met the needs of multiple classified associations worldwide. This is then enormously passed down in the construction of fire safety products, agro chemicals, agro chemicals, ship manufacturing, fire safety products, engineering, dairy and food processing, pharmaceutical, and so on. As a company, we value our customer's satisfaction and strive to provide them with the best products and service possible.",
      ],
    },
    {
      heading: "Our Goal",
      infos: [
        "Our goal is to always provide fast and speedy delivery of steel products and we can proudly say that 30 years of experience have made us capable enough to execute our commitments into instant actions and this is the reason our new and old customers trust our services and are always more than happy to source from us.",
      ],
    },
    {
      heading: "What Makes CTI Unique Among Others?",
      infos: [
        "We believe that it is our huge responsibility to ensure that our customers are satisfied with our products and services. To achieve this, a separate team is assigned to investigate and supervise the whole process of production closely to enhance the quality of material with physical and chemical tests.",
        "We believe that it is our huge responsibility to ensure that our customers are satisfied with our products and services. To achieve this, a separate team is assigned to investigate and supervise the whole process of production closely to enhance the quality of material with physical and chemical tests.",
      ],
    },
    {
      heading: "Our Customer's Experience Is Our Priority",
      infos: [
        "Customers do not care how much you know unless they know how much you care. For that reason, CTI steel industry has always been at frontline to provide the best solution during time of risks and ensure to swiftly deal with problems if they arise.",
        "In addition to providing quality products at a fair price, we also delivered those products in a timely manner which helped us gain long term customer loyalty, trust and satisfaction.",
        "If you want to have same experience like our customers, click the below button",
      ],
    },
  ];

  const mainPointsInAbout = [
    "CTI has widely recognized worldwide for providing steel with excellence and distinguished quality.",
    "The management team of CTI is well trained enough that it always makes sure to meet all the requirements of customers and do everything possible to assist them.",
    "We at CTI have a spectrum analyzer and testing equipment to check the mechanical performance of steel products to meet the customer's satisfaction.",
    "CTI has a separate team of inspectors who keenly observe all the batches and bars of steel to test the quality before delivering them to the customers.",
    "The inspection team also measures the length, width, and thickness also scrutinizes the chemical composition and mechanical attainment of steel to ensure that our customers can source the best quality product from us.",
    "We make sure that the steel our customers received should be free from any type of contamination like mud, dust, oil, or any other external material.",
    "Our team also checks that the steel we provide should not have any cracks, divisions, splits, breaches, and any other malformation on it.",
    "Our timely delivery and quality products at a fair price are what makes us stand out among others in the steel industry and helped us gain the long customer loyalty with satisfaction.",
  ];

  return (
    <Fragment>
      <div className="about-page--section">
        <div className="about-page--heading">
          <h1 className="about--heading">About Us</h1>
        </div>
        <div className="history--section">
          <div className="org-history">
            <p>
              Since the establishment of our industry in 1992, CTI has
              experienced tremendous success over the last 30 years across
              India. After being recognized on a distinguished level, our
              company can provide services globally with the exact level of
              quality and uniqueness that our customers require.
            </p>
          </div>
        </div>
        <div className="about-infos">
          <Section classname={"about-infos--main"}>
            {aboutArr.map(({ heading, infos }, i) => (
              <div key={i} className="about--info">
                <h2>{heading}</h2>
                <div className="points">
                  {infos.map((info, i) => (
                    <p key={i}>{info}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="about--info">
              <h2>What Makes CTI Stand Out Among Others</h2>
              <ul className="points">
                {mainPointsInAbout.map((sentence, i) => (
                  <li key={i}>{sentence}</li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
      </div>
      <Footer />
      <div className="about-bg"></div>
    </Fragment>
  );
};

export default AboutPage;
