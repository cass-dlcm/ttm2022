import React from "react";
import { Link } from "react-router-dom";
import "./NavBarDark.css";

export default function NavBar() {
	return (
		<div className="NavBarDark">
			<nav class="navbar navbar-expand-lg navbar-dark-background-color">
				<a className="navbar-brand d-flex" href="/">
					<img src="./logo_light.png"></img>
					Catch Up
				</a>

				<ul className="navbar-links navbar-nav d-flex flex-row justify-contents-end">
					<li className="nav-item active me-1">
						<a className="nav-link" href="/calendar">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/mycatchups">
							My Catch Ups
						</a>
					</li>
					<li className="nav-item ms-1 me-1">
						<a className="nav-link" href="/mycontacts">
							My Contacts
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
