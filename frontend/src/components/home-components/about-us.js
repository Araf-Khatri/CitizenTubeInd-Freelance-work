import Section from "../section";
import "./about-us.css";

const AboutUs = () => {
  return (
    <div className="about-us--section">
      <Section>
        <div className="about-us">
          <h1 className="about-us--heading">About Us</h1>
          <p>
            Since the establishment of our industry in 1992, CTI has experienced
            tremendous success over the last 30 years across India. After being
            recognized on a distinguished level, our company can provide
            services globally with the exact level of quality and uniqueness
            that our customers require.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default AboutUs;
