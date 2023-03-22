import './section.css'

const Section = ({ children, classname }) => {
  return <div className={`section ${classname ?? ""}`}>{children}</div>;
};

export default Section;
