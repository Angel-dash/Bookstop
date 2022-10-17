import React from "react";
import Profilepic from "../Images/Profilepic.png";
import "./Profile.css";
const Profile = () => {
	return (
		<div className="profile-card">
			<div className="card-header">
				<div className="pic">
					<img src={Profilepic} className="" />
				</div>

				<h3>Name: Samuel Jackson </h3>
				<p>Email:Dontcallmenigga@gmail.com </p>
				<button>Update your Profile</button>
			</div>
			<h4>Top Books</h4>
			<h5>Planning</h5>
		</div>
	);
};

export default Profile;
