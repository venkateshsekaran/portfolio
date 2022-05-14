import React from "react";
import DATA from "./Data";
function Service() {
  const card = (props) => {
    return (
      <div className="col-md-6 mb-5 pb-5 mt-5">
        <div className="card text-center py-5" key={props.id}>
          <img
            src={props.img}
            className="card-img-top mx-auto p-2"
            alt={props.title}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Services</h1>
              <hr />
            </div>
          </div>
          <div className="row">{DATA.map(card)}</div>
        </div>
      </section>
    </div>
  );
}
export default Service;
