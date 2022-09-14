import React from "react";
import "./LoginSignup.css";
const Signup = () => {
	return (
		<>
			<section className="signup">
				<div className="LoginSignUpContainer">
					<div className="LoginSignUpBox">
						<form className="loginForm">
							<div className="loginEmail">
								<input type="email" placeholder="Email" required />
							</div>
							<div className="loginPassword">
								<input type="password" placeholder="Password" required />
							</div>
							<input type="submit" value="Login" className="loginBtn" />
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signup;
