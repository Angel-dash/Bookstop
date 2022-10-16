import React from "react";
import Profilepic from "../Images/Profilepic.png";
import "./Profile.css";
const Profile = () => {
	return (
		<div className="p_container">
			<div className="profile-box">
				<img src={Profilepic} className="" />

				<h3>Name: Samuel Jackson </h3>
			</div>
		</div>
	);
};

export default Profile;
