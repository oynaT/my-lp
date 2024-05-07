import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Header() {

    const location = useLocation();
    const isActiveLocation = ['/about', '/blog', '/blog-detail', '/pricing', '/contact',].includes(location.pathname);

    return (
        <>
            <header className={`main-header ${isActiveLocation ? 'header-style-two' : ''}`}>
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="clearfix">
                            <div className="pull-left logo-box">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={isActiveLocation ? "./assets/images/logo-2.png" : "./assets/images/logo.png"} alt="" title="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-outer clearfix">
                                <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
                                <nav className="main-menu navbar-expand-md">
                                    <div className="navbar-header">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className="navbar-collapse show collapse clearfix" id="navbarSupportedContent">
                                        <ul className="navigation left-nav clearfix">
                                            <li ><Link className="current" to="/">Home</Link></li>
                                            <li className="dropdown"><Link to="#">About</Link>
                                                <ul>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li> <Link to="/pricing">Pricing</Link></li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <ul className="navigation right-nav clearfix">
                                            <li className="dropdown"><Link to="#">Blog</Link>
                                                <ul>
                                                    <li><Link to="/blog">Our Blog</Link></li>
                                                    <li><Link to="/blog-detail">Blog Detail</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </nav>

                                <ul className="social-box">
                                    <li><Link to="https://twitter.com/"><span className="icofont-twitter"></span></Link></li>
                                    <li><Link to="https://www.behance.net/"><span className="icofont-behance"></span></Link></li>
                                    <li><Link to="https://www.instagram.com/"><span className="icofont-instagram"></span></Link></li>
                                </ul>

                                <div className="outer-box clearfix">
                                    <ul className="options-nav">
                                        <li className="search-box-outer icon-magnifier"></li>
                                    </ul>

                                    <div className="cart-box">
                                        <div className="dropdown">
                                            <button className="cart-box-btn dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false"><span className="icon-basket"></span><span
                                                    className="total-cart">2</span></button>
                                            <div className="dropdown-menu pull-right cart-panel" aria-labelledby="dropdownMenu">

                                                <div className="cart-product">
                                                    <div className="inner">
                                                        <div className="cross-icon"><span className="icon fa fa-remove"></span></div>
                                                        <div className="image"><img src="./assets/images/resource/post-thumb-1.jpg" alt="" /></div>
                                                        <h3><Link to="/contact">Beard Color</Link></h3>
                                                        <div className="quantity-text">Quantity 01</div>
                                                        <div className="price">$99.00</div>
                                                    </div>
                                                </div>
                                                <div className="cart-product">
                                                    <div className="inner">
                                                        <div className="cross-icon"><span className="icon fa fa-remove"></span></div>
                                                        <div className="image"><img src="./assets/images/resource/post-thumb-2.jpg" alt="" /></div>
                                                        <h3><Link href="/contact">Shave</Link></h3>
                                                        <div className="quantity-text">Quantity 1</div>
                                                        <div className="price">$99.00</div>
                                                    </div>
                                                </div>
                                                <div className="cart-total">Sub Total: <span>$198</span></div>
                                                <ul className="btns-boxed">
                                                    <li><Link to="/contact">View Cart</Link></li>
                                                    <li><Link to="/contact">CheckOut</Link></li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon lnr lnr-cross"></span></div>

                    <nav className="menu-box">
                        <div className="nav-logo"><Link to="/">
                            <img src="./assets/images/logo-2.png" alt="" title="" />
                        </Link></div>
                        <div className="menu-outer">

                        </div>
                    </nav>
                </div>
            </header>

            {/* {isSearchOpen && <Search toggleSearch={toggleSearch} />} */}



        </>

    )
}