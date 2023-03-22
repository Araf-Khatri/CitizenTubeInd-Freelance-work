import "./product-details.css";
import Tab from "./tab";

const ProductDetails = ({ thickness, size, typesAndDetails, prodClass, prodType }) => {
  return (
    <div className="tabs">
      {typesAndDetails.map((productDetails, i) => (
        <Tab key={i} prodType={prodType} productDetails={productDetails} thickness={thickness} size={size} prodClass={prodClass} />
      ))}
    </div>
  );
};

export default ProductDetails;
