import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
const Footer = () => {
	return (
		<>
			<div className="main-footer">
				<div className="column">
					<h1>BOOKSTOP</h1>
					<ul className="social-links">
						<li>Dhulikhel,Nepal</li>
						<li>Post Box No.12222</li>
						<li>28 kilo</li>
					</ul>
				</div>
				<div className="column">
					<h1>Navigate</h1>
					<ul className="social-links">
						<li>Home</li>
						<li>Contact</li>
						<li>About</li>
						<li>Terms</li>
					</ul>
				</div>
				<div className="column">
					<h1>Stay Connected</h1>
					<ul className="social-links">
						<li>Facebook</li>
						<li>Instagram</li>
						<li>Youtube</li>
						<li>Twitter</li>
					</ul>
				</div>
				<hr />
				<div className="row">
					<p className="col-sm">
						&copy;{new Date().getFullYear()} BOOKSTOP Inc| All rights reserved
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
