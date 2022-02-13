import React from "react";
import { Link } from "react-router-dom";
import NavBarDark from "../NavBarDark";
import "./Calendar.css";

export default function Calendar() {
	return (
		<div className="Calendar">
			<NavBarDark />
			<h1 className="title">Hello from Calendar</h1>
		</div>
	);
}
