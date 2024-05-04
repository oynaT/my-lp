import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
	return (

		<footer className="main-footer" style={{ backgroundImage: "url(./assets/images/background/2.jpg)" }}>
			<div className="auto-container">
				<div className="widgets-section">
					<div className="row clearfix">

						<div className="footer-column col-lg-4 col-md-6 col-sm-12">
							<div className="footer-widget office-widget">
								<h4>office</h4>
								<ul className="location-list">
									<li>166 Main Street, Beverly Hills, CA, 90210 <br /> United States</li>
									<li><a href="mailto:hello@unorestudio.co">hello@unorestudio.co</a></li>
									<li><a href="tel:+0085-346-2188">+0085 346 2188</a></li>
								</ul>

								<ul className="social-box">
									<li><a href="https://twitter.com/" className="icofont-twitter"> </a></li>
									<li className="facebook"><a href="http://facebook.com/" className="icofont-facebook"> </a></li>
									<li className="google"><a href="https://www.google.com/" className="icofont-google-plus"> </a></li>
									<li className="behance"><a href="https://www.behance.net/" className="icofont-behance"> </a></li>
									<li className="instagram"><a href="https://www.instagram.com/" className="icofont-instagram"> </a></li>
								</ul>
							</div>
						</div>

						<div className="footer-column col-lg-4 col-md-12 col-sm-12">
							<div className="footer-widget logo-widget">
								<div className="logo">
									<Link to="/"><img src="./assets/images/footer-logo.png" alt="" /> </Link>
								</div>
							</div>
						</div>

						<div className="footer-column col-lg-4 col-md-6 col-sm-12">
							<div className="footer-widget twitter-widget">
								<h4>twitter</h4>
								<div className="tweet">
									Looking for a Creative PSD Template? <br/> It here: <a href="/#"> https://tf.net/OAWS890a </a> <br />
									<div className="post-date">2 days ago</div>
								</div>
								<div className="tweet">
									You need an image stock <br /> It here: <a href="/#"> https://uph.com/567AW1 </a><br />
									<div className="post-date">4 days ago</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="auto-container">
					<div className="copyright">
						<p className="copyright">© 2021 <strong>Barbero</strong> Made with
							<i className="icofont-heart text-danger" aria-hidden="true"></i> by
							<a href="https://hasthemes.com/"><strong>HasThemes</strong></a>.</p>
					</div>
				</div>
			</div>

			
		</footer>



	)
}