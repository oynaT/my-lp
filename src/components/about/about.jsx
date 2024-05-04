import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="page-wrapper">

            <section
                className="page-banner-section"
                style={{ backgroundImage: "url(./assets/images/background/3.jpg)" }}
            >
                <div className="auto-container">
                    <div className="title">Since 1991</div>
                    <h1>About</h1>
                    <h2>Barber Shop</h2>
                </div>
            </section>

            <section className="reserve-section">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">

                            <div className="logo-column col-lg-5 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image">
                                        <img src="./assets/images/resource/reserve.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="content-column col-lg-7 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h2>
                                        Haircut &amp; Shaving <br /> Barbershop
                                    </h2>
                                    <p>
                                        We are a fairly small, flexible design studio that designs for
                                        print and web. Whether you need to create a brand from scratch,
                                        including marketing and a beautiful and functional website or
                                        whether you are looking for <br /> a great experience.
                                    </p>
                                    <div className="reserve">reservation</div>
                                    <a href="tel:123-456-7899" className="phone">
                                        123-456-7899
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section style-two">
                <div className="auto-container">

                    <div className="section-title centered">
                        <h2>Our Services</h2>
                    </div>
                    <div className="row clearfix">

                        <div className="service-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="./assets/images/resource/service-1.jpg" alt="" />
                                </div>
                                <div className="lower-content">
                                    <h4>                                        
                                        <Link to="/blog-detail">Moustache Trim</Link>
                                    </h4>
                                    <p>Praesent volutpat ut nisl inhend Vestibulum ante ipsum.</p>
                                </div>
                            </div>
                        </div>

                        <div className="service-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="./assets/images/resource/service-2.jpg" alt="" />
                                </div>
                                <div className="lower-content">
                                    <h4>
                                        <Link to="/blog-detail">Beard Trim</Link>
                                    </h4>
                                    <p>Praesent volutpat ut nisl inhend Vestibulum ante ipsum.</p>
                                </div>
                            </div>
                        </div>

                        <div className="service-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="./assets/images/resource/service-3.jpg" alt="" />
                                </div>
                                <div className="lower-content">
                                    <h4>
                                        <Link to="/blog-detail">Haircut</Link>
                                    </h4>
                                    <p>Praesent volutpat ut nisl inhend Vestibulum ante ipsum.</p>
                                </div>
                            </div>
                        </div>

                        <div className="service-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="./assets/images/resource/service-4.jpg" alt="" />
                                </div>
                                <div className="lower-content">
                                    <h4>
                                        <Link to="/blog-detail">Hot Towel Face Shave</Link>
                                    </h4>
                                    <p>Praesent volutpat ut nisl inhend Vestibulum ante ipsum.</p>
                                </div>
                            </div>
                        </div>

                        <div className="service-block col-lg-3 col-md-6 col-sm-12 offset-lg-1">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="./assets/images/resource/service-5.jpg" alt="" />
                                </div>
                                <div className="lower-content">
                                    <h4>
                                        <Link to="/blog-detail">Clipper Cut</Link>
                                    </h4>
                                    <p>Praesent volutpat ut nisl inhend Vestibulum ante ipsum.</p>
                                </div>
                            </div>
                        </div>

                        <div className="service-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="./assets/images/resource/service-6.jpg" alt="" />
                                </div>
                                <div className="lower-content">
                                    <h4>
                                        <Link to="/blog-detail">Facial &amp; Massage</Link>
                                    </h4>
                                    <p>Praesent volutpat ut nisl inhend Vestibulum ante ipsum.</p>
                                </div>
                            </div>
                        </div>

                        <div className="service-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="./assets/images/resource/service-7.jpg" alt="" />
                                </div>
                                <div className="lower-content">
                                    <h4>
                                        <Link to="/blog-detail">Barber Store</Link>
                                    </h4>
                                    <p>Praesent volutpat ut nisl inhend Vestibulum ante ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="auto-container">
                    <div className="section-title centered light">
                        <h2>Our Stylists</h2>
                    </div>
                    <div className="row clearfix">

                        <div className="team-block col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="inner-box wow fadeInLeft"
                                data-wow-delay="0ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="image">
                                    <Link to="/about">Barber Store
                                        <img src="./assets/images/resource/team-1.jpg" alt="" />
                                    </Link>
                                    <ul className="social-icons">
                                        <li>
                                            <a href="https://twitter.com/" className="icofont-twitter"> </a>
                                        </li>
                                        <li>
                                            <a href="http://facebook.com/" className="icofont-facebook"> </a>
                                        </li>
                                        <li>
                                            <a href="http://google.com/" className="icofont-instagram"> </a>
                                        </li>
                                        <li>
                                            <a href="http://linkedin.com/" className="icofont-linkedin"> </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h4>
                                        <Link to="/about">Edward Eric Jr </Link>
                                    </h4>
                                    <div className="designation">Hair &amp; Beard Stylist</div>
                                </div>
                            </div>
                        </div>

                        <div className="team-block col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="inner-box wow fadeInUp"
                                data-wow-delay="0ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="image">
                                    <a href="about.html">
                                        <img src="./assets/images/resource/team-2.jpg" alt="" />
                                    </a>
                                    <ul className="social-icons">
                                        <li>
                                            <a href="https://twitter.com/" className="icofont-twitter"> </a>
                                        </li>
                                        <li>
                                            <a href="http://facebook.com/" className="icofont-facebook"> </a>
                                        </li>
                                        <li>
                                            <a href="http://google.com/" className="icofont-instagram"> </a>
                                        </li>
                                        <li>
                                            <a href="http://linkedin.com/" className="icofont-linkedin"> </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h4>
                                        <Link to="/about">Tom Holland </Link>
                                    </h4>
                                    <div className="designation">Clipper Cut Stylist</div>
                                </div>
                            </div>
                        </div>

                        <div className="team-block col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="inner-box wow fadeInRight"
                                data-wow-delay="0ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="image">
                                    <a href="about.html">
                                        <img src="./assets/images/resource/team-3.jpg" alt="" />
                                    </a>
                                    <ul className="social-icons">
                                        <li>
                                            <a href="https://twitter.com/" className="icofont-twitter"> </a>
                                        </li>
                                        <li>
                                            <a href="http://facebook.com/" className="icofont-facebook"> </a>
                                        </li>
                                        <li>
                                            <a href="http://google.com/" className="icofont-instagram"> </a>
                                        </li>
                                        <li>
                                            <a href="http://linkedin.com/" className="icofont-linkedin"> </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h4>
                                        <Link to="/about">Novad Erakovic </Link>
                                    </h4>
                                    <div className="designation">Beard Trim &amp; Shaving Man</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}