import React from "react";
import Navbar from "../Navbar";
import Profile from "../Profile";

export default function Header() {
	return (
		<div className="flex w-full items-center">
			<Navbar />
			<Profile />
		</div>
	);
}
