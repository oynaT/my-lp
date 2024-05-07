import React from 'react';
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/js/bootstrap.js';
//import 'bootstrap';
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Home() {

    return (
        <>
            <div className="page-wrapper">
                <section className="banner-section">

                    {/* <OwlCarousel items={3}
                        className="owl-theme"
                        loop
                        nav
                        margin={8} autoplay={true} dots={true}>
                        <div><img className="img" src={'./assets/images/main-slider/1.jpg'} alt="1"/></div>
                        <div><img className="img" src={'./assets/images/main-slider/1.jpg'} alt="2"/></div>
                        <div><img className="img" src={'./assets/images/main-slider/1.jpg'} alt="3"/></div>

                         <div className="owl-nav">
                            <div className="owl-prev">
                                <span className="fa fa-angle-left" />
                            </div>
                            <div className="owl-next">
                                <span className="fa fa-angle-right" />
                            </div>
                        </div>
                        <div className="owl-dots">
                            <div className="owl-dot">
                                <span />
                            </div>
                            <div className="owl-dot">
                                <span />
                            </div>
                            <div className="owl-dot active">
                                <span />
                            </div>
                        </div> 

                    </OwlCarousel> */}

                    <OwlCarousel items={1}
                        className="main-slider-carousel owl-carousel owl-theme owl-loaded owl-drag"
                        loop
                        nav
                        margin={8} autoplayTimeout={5500} >
                        <div className="slide" style={{ backgroundImage: "url(./assets/images/main-slider/1.jpg)" }} >
                            <div className="auto-container">
                                <div className="content-boxed">
                                    <div className="inner-box">
                                        <div className="title">Since 1991</div>
                                        <h1>Barbero</h1>
                                        <h2>
                                            Haircut Shave <br /> &amp; Barber
                                        </h2>
                                        <div className="btn-box text-center">

                                            <Link to="/contact" className="theme-btn btn-style-one">
                                                <span className="txt">Reservation</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="slide" style={{ backgroundImage: "url(./assets/images/main-slider/1.jpg)" }}>
                            <div className="auto-container">
                                <div className="content-boxed">
                                    <div className="inner-box">
                                        <div className="title">Since 1991</div>
                                        <h1>Barbero</h1>
                                        <h2>
                                            Haircut Shave <br /> &amp; Barber
                                        </h2>
                                        <div className="btn-box text-center">

                                            <Link to="/contact" className="theme-btn btn-style-one">
                                                <span className="txt">Reservation</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>

                    <div className="slider-icon-scroll scroll-to-target" data-bs-toggle="#reserveSection">
                        <span className="icofont-scroll-down"></span>
                    </div>
                </section>

                <section className="reserve-section" id="reserveSection">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="row clearfix">
                                <div className="logo-column col-lg-5 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <img src="./assets/images/resource/reserve.png" alt="reserve" />
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
                                        <Link to="tel:123-456-7899" className="phone">
                                            123-456-7899
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="services-section">
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
                                            <Link to="blog-detail">Moustache Trim</Link>
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
                                            <Link to="blog-detail">Beard Trim</Link>
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
                                            <Link to="blog-detail">Haircut</Link>
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
                                            <Link to="blog-detail">Hot Towel Face Shave</Link>
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
                                            <Link to="blog-detail">Clipper Cut</Link>
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
                                            <Link to="blog-detail">Facial &amp; Massage</Link>
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
                                            <Link to="blog-detail">Barber Store</Link>
                                        </h4>
                                        <p>Praesent volutpat ut nisl inhend Vestibulum ante ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gallery-section">

                    <div className="sortable-masonry">
                        
                        <div className="auto-container">

                            <div className="filters">
                                <div className="section-title">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h2>Our Style</h2>
                                        </div>
                                        <div className="pull-right">
                                            <ul className="filter-tabs filter-btns clearfix">
                                                <li
                                                    className="filter active"
                                                    data-role="button"
                                                    data-filter=".all"
                                                >
                                                    all{" "}
                                                </li>
                                                <li className="filter" data-role="button" data-filter=".hair">
                                                    hair{" "}
                                                </li>
                                                <li
                                                    className="filter"
                                                    data-role="button"
                                                    data-filter=".beard"
                                                >
                                                    beard
                                                </li>
                                                <li
                                                    className="filter"
                                                    data-role="button"
                                                    data-filter=".moustache"
                                                >
                                                    moustache
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="items-container clearfix">
                            <div className="gallery-block all masonry-item beard moustache col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            data-caption=""
                                            href="./assets/images/gallery/1.jpg"
                                        >
                                            <img src="./assets/images/gallery/1.jpg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-block all masonry-item moustache hair col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            data-caption=""
                                            href="./assets/images/gallery/2.jpg"
                                        >
                                            <img src="./assets/images/gallery/2.jpg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-block all masonry-item beard col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            data-caption=""
                                            href="./assets/images/gallery/3.jpg"
                                        >
                                            <img src="./assets/images/gallery/3.jpg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-block all masonry-item moustache col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            data-caption=""
                                            href="./assets/images/gallery/4.jpg"
                                        >
                                            <img src="./assets/images/gallery/4.jpg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-block all masonry-item hair beard col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            data-caption=""
                                            href="./assets/images/gallery/5.jpg"
                                        >
                                            <img src="./assets/images/gallery/5.jpg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pricing-section">
                    <div className="auto-container">
                        <div className="section-title centered">
                            <h2>Pricing List</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="column col-lg-6 col-md-12 col-sm-12">
                                <div className="price-block">
                                    <div className="inner-box">
                                        <div className="price">$8.5</div>
                                        <h4>
                                            <Link href="pricing.html">classNameic haircut</Link>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                                    </div>
                                </div>
                                <div className="price-block">
                                    <div className="inner-box">
                                        <div className="price">$12.5</div>
                                        <h4>
                                            <Link href="pricing.html">
                                                classNameic haircut &amp; hair washing
                                            </Link>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                                    </div>
                                </div>
                                <div className="price-block">
                                    <div className="inner-box">
                                        <div className="price">$5.5</div>
                                        <h4>
                                            <Link href="pricing.html">Hair washing</Link>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                                    </div>
                                </div>
                                <div className="price-block">
                                    <div className="inner-box">
                                        <div className="price">$8.5</div>
                                        <h4>
                                            <Link href="pricing.html">Trimming &amp; arranging long beard </Link>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                                    </div>
                                </div>
                                <div className="price-block">
                                    <div className="inner-box">
                                        <div className="price">$2.5</div>
                                        <h4>
                                            <Link href="pricing.html">Moustache Trim</Link>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-lg-6 col-md-12 col-sm-12">
                                <div className="price-block">
                                    <div className="inner-box">
                                        <div className="price">$8.5</div>
                                        <h4>
                                            <Link href="pricing.html">Beard washing</Link>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                                    </div>
                                </div>
                                <div className="price-block">
                                    <div className="inner-box">
                                        <div className="price">$12.5</div>
                                        <h4>
                                            <Link href="pricing.html">Stylization &amp; arranging beard</Link>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                                    </div>
                                </div>
                                <div className="price-block">
                                    <div className="inner-box">
                                        <div className="price">$6.5</div>
                                        <h4>
                                            <Link href="pricing.html">Beard &amp; hair washing</Link>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                                    </div>
                                </div>
                                <div className="price-block">
                                    <div className="inner-box">
                                        <div className="price">$12.5</div>
                                        <h4>
                                            <Link href="pricing.html">Facial Massage</Link>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                                    </div>
                                </div>
                                <div className="price-block">
                                    <div className="inner-box">
                                        <div className="price">$8.5</div>
                                        <h4>
                                            <Link href="pricing.html">Clipper Cut STyle</Link>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Testimonial Section */}
                <section 
                    className="testimonial-section"
                    style={{ backgroundImage: "url(./assets/images/background/1.jpg)" }}
                >
                    <div className="auto-container">
                        {/* Title Box */}
                        <div className="title-box">
                            <div className="logo-box">
                                <img src="./assets/images/resource/testimonial-logo.png" alt="" />
                            </div>
                            <h2>Testimonials</h2>
                        </div>
                        {/* End Title Box */}
                        <div className="testimonial-outer">
                            <div className="quote-icon">
                                <span className="quote" />
                            </div>
                            {/*Client Testimonial Carousel*/}

                            <OwlCarousel items={1} className="client-testimonial-carousel owl-carousel owl-theme owl-loaded owl-drag"
                                loop
                                nav
                                 >

                            {/* <div className="client-testimonial-carousel owl-carousel owl-theme"> </div> */}
                                {/* Testimonial Block */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Praesent nec risus vitae sem vulputate eleifend id sit amet
                                            nunc. Etiam condimentum at sapien a porttitor. Donec ultricies
                                            sollicitudin lacus. Donec purus id velit, pulvinar eget sodales
                                            non, rhoncus quis quam. Morbi eros ante, tempus eget convallis
                                            semper, ultricies id odio. Phasellus vel sodales augue.
                                        </p>
                                        <div className="info-box">
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                            <div className="author-info">
                                                aslam hasib - <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Block */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Praesent nec risus vitae sem vulputate eleifend id sit amet
                                            nunc. Etiam condimentum at sapien a porttitor. Donec ultricies
                                            sollicitudin lacus. Donec purus id velit, pulvinar eget sodales
                                            non, rhoncus quis quam. Morbi eros ante, tempus eget convallis
                                            semper, ultricies id odio. Phasellus vel sodales augue.
                                        </p>
                                        <div className="info-box">
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                            <div className="author-info">
                                                aslam hasib - <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Block */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Praesent nec risus vitae sem vulputate eleifend id sit amet
                                            nunc. Etiam condimentum at sapien a porttitor. Donec ultricies
                                            sollicitudin lacus. Donec purus id velit, pulvinar eget sodales
                                            non, rhoncus quis quam. Morbi eros ante, tempus eget convallis
                                            semper, ultricies id odio. Phasellus vel sodales augue.
                                        </p>
                                        <div className="info-box">
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                            <div className="author-info">
                                                aslam hasib - <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Block */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Praesent nec risus vitae sem vulputate eleifend id sit amet
                                            nunc. Etiam condimentum at sapien a porttitor. Donec ultricies
                                            sollicitudin lacus. Donec purus id velit, pulvinar eget sodales
                                            non, rhoncus quis quam. Morbi eros ante, tempus eget convallis
                                            semper, ultricies id odio. Phasellus vel sodales augue.
                                        </p>
                                        <div className="info-box">
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                            <div className="author-info">
                                                aslam hasib - <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Block */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Praesent nec risus vitae sem vulputate eleifend id sit amet
                                            nunc. Etiam condimentum at sapien a porttitor. Donec ultricies
                                            sollicitudin lacus. Donec purus id velit, pulvinar eget sodales
                                            non, rhoncus quis quam. Morbi eros ante, tempus eget convallis
                                            semper, ultricies id odio. Phasellus vel sodales augue.
                                        </p>
                                        <div className="info-box">
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                            <div className="author-info">
                                                aslam hasib - <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Block */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Praesent nec risus vitae sem vulputate eleifend id sit amet
                                            nunc. Etiam condimentum at sapien a porttitor. Donec ultricies
                                            sollicitudin lacus. Donec purus id velit, pulvinar eget sodales
                                            non, rhoncus quis quam. Morbi eros ante, tempus eget convallis
                                            semper, ultricies id odio. Phasellus vel sodales augue.
                                        </p>
                                        <div className="info-box">
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                            <div className="author-info">
                                                aslam hasib - <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                            {/*Product Thumbs Carousel*/}
                            {/* <div className="client-thumb-outer"> </div> */}
                                <div className="client-thumbs-carousel owl-carousel owl-theme">
                                    <div className="thumb-item">
                                        <figure className="thumb-box">
                                            <img src="./assets/images/resource/author-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="thumb-item">
                                        <figure className="thumb-box">
                                            <img src="./assets/images/resource/author-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="thumb-item">
                                        <figure className="thumb-box">
                                            <img src="./assets/images/resource/author-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="thumb-item">
                                        <figure className="thumb-box">
                                            <img src="./assets/images/resource/author-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="thumb-item">
                                        <figure className="thumb-box">
                                            <img src="./assets/images/resource/author-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="thumb-item">
                                        <figure className="thumb-box">
                                            <img src="./assets/images/resource/author-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                
                                </div>
                               

                        </OwlCarousel>

                        
                        </div>
                    </div>
                    
                </section>
                {/* End Testimonial Section */}




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
                                    data-wow-duration="1500ms" >
                                    <div className="image">
                                        <Link href="about.html">
                                            <img src="./assets/images/resource/team-1.jpg" alt="" />
                                        </Link>
                                        <ul className="social-icons">
                                            <li>
                                                <Link href="https://twitter.com/" className="icofont-twitter" />
                                            </li>
                                            <li>
                                                <Link href="http://facebook.com/" className="icofont-facebook" />
                                            </li>
                                            <li>
                                                <Link href="http://google.com/" className="icofont-instagram" />
                                            </li>
                                            <li>
                                                <Link href="http://linkedin.com/" className="icofont-linkedin" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h4>
                                            <Link href="about.html">Edward Eric Jr</Link>
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
                                        <Link href="about.html">
                                            <img src="./assets/images/resource/team-2.jpg" alt="" />
                                        </Link>
                                        <ul className="social-icons">
                                            <li>
                                                <Link href="https://twitter.com/" className="icofont-twitter" />
                                            </li>
                                            <li>
                                                <Link href="http://facebook.com/" className="icofont-facebook" />
                                            </li>
                                            <li>
                                                <Link href="http://google.com/" className="icofont-instagram" />
                                            </li>
                                            <li>
                                                <Link href="http://linkedin.com/" className="icofont-linkedin" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h4>
                                            <Link href="about.html">Tom Holland</Link>
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
                                        <Link href="about.html">
                                            <img src="./assets/images/resource/team-3.jpg" alt="" />
                                        </Link>
                                        <ul className="social-icons">
                                            <li>
                                                <Link href="https://twitter.com/" className="icofont-twitter" />
                                            </li>
                                            <li>
                                                <Link href="http://facebook.com/" className="icofont-facebook" />
                                            </li>
                                            <li>
                                                <Link href="http://google.com/" className="icofont-instagram" />
                                            </li>
                                            <li>
                                                <Link href="http://linkedin.com/" className="icofont-linkedin" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h4>
                                            <Link href="about.html">Novad Erakovic</Link>
                                        </h4>
                                        <div className="designation">Beard Trim &amp; Shaving Man</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="news-section">
                    <div className="auto-container">
                        <div className="inner-container">

                            <div className="section-title">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <h2>Inspiration</h2>
                                    </div>
                                    <div className="pull-right">
                                        <Link to="/blog" className="articles">
                                            all articles
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link href="/blog-detail.html">
                                                <img src="./assets/images/resource/news-1.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="lower-content">
                                            <div className="title">inspiration</div>
                                            <h4>
                                                <Link to="blog-detail">
                                                    How to improve the flow of UI/UX &amp; delivery its in your
                                                    team in way effective
                                                </Link>
                                            </h4>
                                            <div className="post-date">December 25, 2020</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link to="blog-detail">
                                                <img src="./assets/images/resource/news-2.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="lower-content">
                                            <div className="title">Products</div>
                                            <h4>
                                                <Link to="blog-detail">
                                                    Unore become 1st winner at CSS Award with Uber cases in 2020
                                                </Link>
                                            </h4>
                                            <div className="post-date">December 25, 2020</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link to="blog-detail">
                                                <img src="./assets/images/resource/news-3.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="lower-content">
                                            <div className="title">community</div>
                                            <h4>
                                                <Link to="blog-detail">
                                                    How to choose stock photos fit with your project. Color,
                                                    blending, restock, etc.
                                                </Link>
                                            </h4>
                                            <div className="post-date">December 25, 2020</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="reservation-section">
                    <div className="auto-container">
                        <div className="section-title centered">
                            <h2>Book A Reservation</h2>
                        </div>
                        <div className="inner-container">
                            <div className="reservation-form">
                                <form method="post" action="contact.html">
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
        </>
    )
}