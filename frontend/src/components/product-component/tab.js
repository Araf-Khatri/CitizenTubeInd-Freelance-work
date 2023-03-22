import { Fragment } from "react";
import "./tab.css";
import "./table.css";

const Tab = ({ productDetails, thickness, size, prodClass, prodType }) => {
  const { name, typeDetails } = productDetails;
  console.log(prodClass  )
  return (
    <Fragment>
      <input type="radio" name="tabs" id={`tab-${name}`} checked onChange={() =>{}}/>
      <label htmlFor={`tab-${name}`}>{name}</label>
      <div className="tab">
        <h2>{name}:</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Type</th>
              {size && <th scope="col">Size</th>}
              {thickness && <th scope="col">Thickness</th>}
              {prodClass && <th scope="col">Class</th>}
              {prodType && <th scope="col">Types</th>}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label={"Type"}>{typeDetails}</td>
              {size && <td data-label={"Size"}>{size}</td>}
              {thickness && <td data-label={"Thickness"}>{thickness}</td>}
              {prodClass && <td data-label={"Class"}>{prodClass}</td>}
              {prodType && <td data-label={"Types"}>{prodType}</td>}
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Tab;

// <div className="tab-section">
//   {/* <div className="main-tab"> */}
//   <h3>Type:</h3>
//   <p>{typeDetails}</p>
//   {/* </div> */}
//   {/* <div className="main-tab"> */}
//   <h3>Size:</h3>
//  <p>{size}</p>
// {/* </div> */}
// {/* <div className="main-tab"> */}
// <h3>Thickness:</h3>
// <p>{thickness}</p>
// {/* </div> */}
// </div>;
