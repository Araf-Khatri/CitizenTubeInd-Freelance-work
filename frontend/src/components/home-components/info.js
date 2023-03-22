import { Fragment } from "react";
import Section from "../section";
import "./info.css";

const Info = ({ infoArr }) => {
  return (
    <div className="info-section">
      <Section>
        <div className="info-grid">
          {infoArr.map(({ image, heading, description }, i) => {
            const addToRight = (
              <div
                className={`info-image--filter${i % 2 === 0 ? " grid-up" : ""}`}
              >
                <img
                  className={`info--image home-info--img`}
                  src={image}
                  alt={heading + " image"}
                />
              </div>
            );
            const isEven = i % 2 === 0;
            return (
              <Fragment key={i}>
                {!isEven && addToRight}
                <div>
                  <h3 className="info--heading">{heading}</h3>
                  <p className="info--description">{description}</p>
                </div>
                {isEven && addToRight}
              </Fragment>
            );
          })}
        </div>
      </Section>
    </div>
  );
};

export default Info;
