import React from "react";

function About() {
  return (
    <div>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-4">
              <h1>About</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="container my-5 ">
          <div className="row">
            <div className="col-md-6 py-5 mx-auto">
              <img
                src="./img/about1.jpg"
                alt="venkatesh"
                height="320px"
                weight="400px"
              />
            </div>
            <div className="col-md-6 my-5">
              <h1 className="display-5 mb-4">Venkatesh S</h1>
              <p className="lead mb-5">
                Hi everyone,I've been learning web Development for a long time
                and getting stronger day by day.
                <br />
                <span style={{ fontWeight: "bold" }}>
                  "Never stop learning because life never stops teaching"
                </span>
                <br />i don't know who said the quote but i love it because it
                suits for both professional and personal life.That's why i'm
                feeding my brain everyday with something new.
                <br />
                Basically i'm an
                enthusiastic,self-motivated,reliable,responsible and hardworking
                person.Quick learning capacity is my major advantage and i'm
                always enthusiastic to learn and undertake new challanges.
                <br />
                Actually i enjoy coding and love to play with logics,i have
                strong foundation in javascript concepts and having good
                knowledge of reactJS.
              </p>
              <div className="progress my-4">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  HTML
                </div>
                <span className="pro">95%</span>
              </div>
              <div className="progress my-4">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  CSS
                </div>
                <span className="pro">80%</span>
              </div>

              <div className="progress my-4">
                <div
                  className="progress-bar bg-DARK"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Bootstrap
                </div>
                <span className="pro">80%</span>
              </div>

              <div className="progress my-4">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Javascript
                </div>
                <span className="pro">90%</span>
              </div>
              <div className="progress my-4">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  React
                </div>
                <span className="pro">80%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
