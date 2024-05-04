import React from 'react';
export default function Contact() {
return (
    <div className="page-wrapper">
  <div className="page-title-section">
    <div className="auto-container">
      <h1>Contact</h1>
      <ul className="post-meta">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
  <section className="map-section">
    <div className="auto-container">
      <div className="map-outer">
        <iframe title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen=""
        />
      </div>
    </div>
  </section>
  <section className="contact-info-section">
    <div className="auto-container">
      <h3>
        Contact us for any further questions, possible <br /> projects &amp;
        business partnerships
      </h3>
      <div className="inner-container">
        <div className="row clearfix">
          <div className="info-column col-lg-4 col-md-6 col-sm-12">
            <div className="inner-column">
              <div className="upper-box">
                <h6>Contact Directly</h6>
                <span className="icon icon-envelope-open" />
              </div>
              <ul className="info-list">
                <li>
                  <a href="mailto:hello@barbero.com">hello@barbero.com</a>
                </li>
                <li>
                  <a href="tel:+056-83-458-868">(+056) 83-458-868</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-column col-lg-4 col-md-6 col-sm-12">
            <div className="inner-column">
              <div className="upper-box">
                <h6>visit our office</h6>
                <span className="icon icon-location-pin" />
              </div>
              <ul className="info-list">
                <li>
                  192 Orchard Street, Ohio, California, <br /> 90002, Unite
                  States
                </li>
              </ul>
            </div>
          </div>
          <div className="info-column col-lg-4 col-md-6 col-sm-12">
            <div className="inner-column">
              <div className="upper-box">
                <h6>work with us</h6>
                <span className="icon icon-briefcase" />
              </div>
              <ul className="info-list">
                <li>
                  Send your CV to our email <br />{" "}
                  <a href="mailto:hello@barbero.com">hello@barbero.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="reservation-section style-two">
    <div className="auto-container">
      <div className="section-title centered">
        <h2>Get In Touch</h2>
      </div>
      <div className="inner-container">
        <div className="reservation-form contact-form">
          <form method="post" action="sendemail.php" id="contact-form">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Full Name"
                  required=""
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Number Phone"
                  required=""
                />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea
                  name="message"
                  placeholder="Here goes your message"
                  defaultValue={""}
                />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                <button
                  className="theme-btn btn-style-one"
                  type="submit"
                  name="submit-form"
                >
                  <span className="txt">Book a Reservation</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

)
}