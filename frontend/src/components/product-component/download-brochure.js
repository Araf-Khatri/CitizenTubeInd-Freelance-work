import { Fragment } from "react";
import "./download-brochure.css";

const DownloadBtn = ({ extraClass }) => {
  const downloadBrochureHandler = () => {
    console.log("clicked");
    const pdfLink = document.createElement("a");
    pdfLink.href = "/pdfs/Citizen-Tube-Industries-Brochure.pdf";
    pdfLink.setAttribute("download", "Citizen-Tube-Industries-Brochure");
    pdfLink.click();
  };

  return (
    <Fragment>
      <button
        className={`prod--btn download-brochure${extraClass ?? ""}`}
        onClick={downloadBrochureHandler}
      >
        Download Brochure
        <span className="download-text">
          For more products and information download our brochure
        </span>
      </button>
    </Fragment>
  );
};

export default DownloadBtn;
