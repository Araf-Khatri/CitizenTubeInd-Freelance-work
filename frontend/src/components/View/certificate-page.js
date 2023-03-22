import "./certificate-page.css";

const CertificatePage = () => {
  document.title = "Citizen Tube | Certificate";
  return (
    <div className="certificate-page">
      {/* <div classname={'certificate-overflow'}> */}
      <div className={"certificate-page--flex"}>
        <img src="/imgs/certificate-main.jpg" alt="certificate" />
        <img src="/imgs/certificate-main-2.jpeg" alt="certificate" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default CertificatePage;
