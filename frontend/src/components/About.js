import React from "react";

const About = () => {
	return <div className="container-a">About</div>;
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
