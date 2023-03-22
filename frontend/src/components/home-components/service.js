import "./service.css";

const Service = ({iconElement, name, description}) => {
  return (
    <div className="service">
      <div className="service-icon">
        {/* <FaRegCheckSquare /> */}
        {iconElement}
      </div>
      <div className="service-text">
        <h2>{name}</h2>
        <p>
         {description}
        </p>
      </div>
    </div>
  );
};

export default Service;
