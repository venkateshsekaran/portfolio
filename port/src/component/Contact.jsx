import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
function Contact() {
  let buttonEl = useRef("null");
  const [data, setData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const messagehandler = (event) => {
    buttonEl.current.disabled = !event.target.checked;
  };

  const eventHandler = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_iwdkhum",
        "template_574n8bj",
        event.target,
        "pKA053PGB5Azkw1Bb"
      )
      .then((res) => {
        console.log(res);
        alert("Your message has been sent");
        buttonEl.current.disabled = !alert();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="contact">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center py-4 mb-5">
              <h1>Contact</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8  mb-5 bg p-3">
              <div className="card ">
                <div className="card-body bg-secondary text-white">
                  <form onSubmit={submitHandler}>
                    <div className="mb-3">
                      <label
                        htmlfor="exampleInputPassword1"
                        className="form-label"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={eventHandler}
                        value={data.name}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlfor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your valid email-id"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={eventHandler}
                        value={data.email}
                      />

                      <label
                        htmlfor="exampleInputEmail1"
                        className="form-label mt-3"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Enter your mobile number"
                        className="form-control mb-2"
                        id="exampleInputEmail2"
                        aria-describedby="emailHelp"
                        onChange={eventHandler}
                        value={data.mobile}
                      />

                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>

                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        onChange={messagehandler}
                      />
                      <label
                        className="form-check-label"
                        htmlfor="exampleCheck1"
                      >
                        Check me out
                      </label>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label me-2"
                        >
                          Message
                        </label>
                        <i className="fas fa-hand-point-down "></i>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="msg"
                          onChange={eventHandler}
                          value={data.msg}
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      ref={buttonEl}
                      disabled
                      className="btn btn-outline-primary text-white fw-normal"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1496804011636!2d77.69902171407831!3d12.962272318591872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11e6982ac5df%3A0xb52fcb3ad37e0ec3!2sPro%20Stack%20Academy!5e0!3m2!1sen!2sin!4v1652194454415!5m2!1sen!2sin"
                width="650"
                height="450"
              ></iframe>
            </div>
            <div className="col-md-4  ">
              <i className="fas fa-home-lg-alt text-primary fs-6 my-2 me-2  text-center"></i>
              <span className="fs-6 ">
                <b> Tamilnadu, India</b>
              </span>
              <br />
              <span> Virudhunagar-626001</span>
              <br />
              <i className="fas fa-mobile-alt text-primary my-2 fs-5  me-3 "></i>
              <span className="fs-6 ">
                <b>8838270877</b>
              </span>
              <br />
              <span> Mon to Fri 9am to 6pm</span>
              <br />

              <i className="fas fa-envelope text-primary my-2 me-2"></i>
              <span style={{ fontWeight: "bold" }}>
                venkateshsekaran18@gmail.com
              </span>
              <br />
              <span> Send us your query anytime!</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
