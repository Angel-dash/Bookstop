import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className="acontainer">
			<div className="aslider">
				<img src="https://via.placeholder.com/210/00FF00?text=1" />
				<img src="https://via.placeholder.com/220/00FF00?text=2" />
				<img src="https://via.placeholder.com/230/00FF00?text=3" />
				<img src="https://via.placeholder.com/240/00FF00?text=4" />
				<img src="https://via.placeholder.com/250/00FF00?text=5" />
				<img src="https://via.placeholder.com/260/00FF00?text=6" />
				<img src="https://via.placeholder.com/270/00FF00?text=7" />
				<img src="https://via.placeholder.com/280/00FF00?text=8" />
				<img src="https://via.placeholder.com/290/00FF00?text=9" />
			</div>
		</div>
	);
};

export default About;
<div className="main-footer">
	<div className="row">
		{/*Column 1*/}
		<div className="col">
			<h1>BOOKSTOP</h1>
			<ul className="social-links">
				<li>Dhulikhel,Nepal</li>
				<li>Post Box No.12222</li>
				<li>28 kilo</li>
			</ul>
		</div>
		{/*Column 2*/}
		<div className="col">
			<h1>Navigate</h1>
			<ul className="social-links">
				<li>Home</li>
				<li>Contact</li>
				<li>About</li>
				<li>Terms</li>
			</ul>
		</div>
		{/*Column 3*/}
		<div>
			<h1>Stay Connected</h1>
			<ul className="social-links">
				<li>Facebook</li>
				<li>Instagram</li>
				<li>Youtube</li>
				<li>Twitter</li>
			</ul>
		</div>
	</div>
	<hr />
	<div className="row">
		<p className="col-sm">
			&copy;{new Date().getFullYear()} BOOKSTOP Inc| All rights reserved
		</p>
	</div>
</div>;
