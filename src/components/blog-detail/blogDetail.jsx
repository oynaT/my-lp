import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function BlogDetails() {
    return (

        <div className="page-wrapper">
            <section className="blog-carousel-section">
                <div className="outer-container">
                    <OwlCarousel items={1}
                        className="single-item-carousel owl-carousel owl-theme"
                        loop
                        nav
                        autoplayTimeout={4500}
                        autoplay={true} >

                        <div className="slide">
                            <div className="image">
                                <img src="./assets/images/background/4.jpg" alt="7dada" />
                            </div>
                        </div>
                        <div className="slide">
                            <div className="image">
                                <img src="./assets/images/background/4.jpg" alt="6dada" />
                            </div>
                        </div>
                        <div className="slide">
                            <div className="image">
                                <img src="./assets/images/background/4.jpg" alt="dad5" />
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>

            <section className="blog-detail-section">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="content-box">
                            <h2>How to improve the flow of UI/UX</h2>
                            <ul className="post-info">
                                <li>Adam Levine</li>
                                <li>December 27, 2020</li>
                                <li>inspiration</li>
                            </ul>
                            <h4>
                                Pinterest, cornhole meditation Blue Bottle art party <br /> meggings
                                cardigan yr sustainable. Letterpress McSwepen, poieney’s fap
                            </h4>
                            <p>
                                Today most people get on average 4 to 6 hours of exercise every day,
                                and make sure that everything they put in their mouths is not filled
                                with sugars or preservatives, but they pay no attention to their
                                mental health, no vacations, not even the occasional long weekend.
                                All of this for hopes of one day getting that big promotion.
                            </p>
                            <p>
                                Coventry is a city with a thousand years of history that has plenty
                                to offer the visiting tourist. Located in the heart of Warwickshire.
                            </p>
                            <blockquote>
                                <div className="quote-heading">
                                    “The forms that designers <br /> produce are flexible, so long as
                                    the <br />
                                    results serve the need.”
                                </div>
                                <div className="author-name">
                                    David Moye, <span>Designer at Spotify</span>
                                </div>
                            </blockquote>
                            <p>
                                Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo
                                before they sold out blog photo booth Marfa semiotics Truffaut.
                                Mustache Schlitz next level blog Williamsburg, deep v typewriter
                                tote bag Banksy +1 literally. Lomo 8-bit pour-over mumblecore photo
                                booth. Kitsch pork belly cred, small batch butcher selvage direct
                                trade. Master cleanse Bushwick cornhole narwhal plaid. Seitan vegan
                                Portland, master cleanse gluten-free fanny pack raw denim hoodie
                                YOLO loko.
                            </p>
                        </div>
                        <div className="gallery-column">
                            <div className="row clearfix">
                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                    <div className="image">
                                        <img src="./assets/images/resource/news-10.jpg" alt="4trd" />
                                        <div className="overlay-box">
                                            <div className="icon-box">
                                                <a
                                                    href="./assets/images/resource/news-10.jpg"
                                                    className="link"
                                                    data-fancybox="blog"
                                                    data-caption=""
                                                >
                                                    <span className="icon icon-size-fullscreen"> </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                    <div className="image">
                                        <img src="./assets/images/resource/news-11.jpg" alt="3rger" />
                                        <div className="overlay-box">
                                            <div className="icon-box">
                                                <a
                                                    href="./assets/images/resource/news-11.jpg"
                                                    className="link"
                                                    data-fancybox="blog"
                                                    data-caption=""
                                                >
                                                    <span className="icon icon-size-fullscreen"> </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-share-options clearfix">
                            <ul className="tags">
                                <li className="tags">Tags :</li>
                                <li>
                                    <a href="/#">Inspiration, </a>
                                </li>
                                <li>
                                    <a href="/#">Workspace, </a>
                                </li>
                                <li>
                                    <a href="/#">Minimal, </a>
                                </li>
                                <li>
                                    <a href="/#">Decoation </a>
                                </li>
                            </ul>
                            <ul className="social-box">
                                <li className="share">Share:</li>
                                <li>
                                    <a href="/#" className="icofont-twitter"> </a>
                                </li>
                                <li className="facebook">
                                    <a href="/#" className="icofont-facebook"> </a>
                                </li>
                                <li className="google">
                                    <a href="/#" className="icofont-google-plus"> </a>
                                </li>
                                <li className="instagram">
                                    <a href="/#" className="icofont-instagram"> </a>
                                </li>
                            </ul>
                        </div>
                        <div className="more-posts">
                            <div className="clearfix">
                                <div className="pull-left">
                                    <a href="/#">
                                        <span className="icon icon-arrow-left"> </span>
                                        Previous
                                    </a>
                                    <h6>How to combine typography perfect for any design</h6>
                                </div>
                                <div className="pull-right next-posts">
                                    <a href="/#">
                                        next
                                        <span className="icon icon-arrow-right"> </span>
                                    </a>
                                    <h6>Cocooil - Review</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-section">
                    <div className="auto-container">
                        <div className="comments-area">
                            <div className="group-title">
                                <h4>02 Comments</h4>
                            </div>
                            <div className="comment-box">
                                <div className="comment">
                                    <div className="author-thumb">
                                        <img src="./assets/images/resource/author-4.jpg" alt="2radta" />
                                    </div>
                                    <div className="comment-inner">
                                        <div className="comment-info clearfix">
                                            <strong>Justin Bieber </strong>
                                            <div className="location">- Aug 26 2020 at 15 hours ago</div>
                                        </div>
                                        <div className="text">
                                            Comment example here. Nulla risus lacus, vehicula id mi vitae,
                                            auctor accumsan nu lla.Sed a dolor sit amrt paremi quam.
                                            terdum.
                                        </div>
                                        <a className="comment-reply" href="/#">
                                            Reply
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-box">
                                <div className="comment">
                                    <div className="author-thumb">
                                        <img src="./assets/images/resource/author-5.jpg" alt="1dadaerr" />
                                    </div>
                                    <div className="comment-inner">
                                        <div className="comment-info clearfix">
                                            <strong>Selena Gomes </strong>
                                            <div className="location">- Jul 17, 2020 at 15 hours ago</div>
                                        </div>
                                        <div className="text">
                                            Comment example here. Nulla risus lacus, vehicula id mi vitae,
                                            auctor accumsan nu lla.Sed a dolor sit amrt paremi quam.
                                            terdum.
                                        </div>
                                        <a className="comment-reply" href="/#">
                                            Reply
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-form">
                            <div className="group-title">
                                <h4>Leave a comment</h4>
                            </div>
                            <form method="post" action="blog.html">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Name"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input
                                            type="text"
                                            name="text"
                                            placeholder="Subject (optional)"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea
                                            name="message"
                                            placeholder="Massage"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <button
                                            className="theme-btn btn-style-one"
                                            type="submit"
                                            name="submit-form"
                                        >
                                            <span className="txt">Post Comment</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}