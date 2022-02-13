import React from "react";
import { Link } from "react-router-dom";
import "./NavBarDark.css";

export default function NavBar() {
	return (
		<div className="NavBarDark">
			<nav class="navbar navbar-expand-lg navbar-dark-background-color">
				<a className="navbar-brand d-flex" href="/">
					<img src="./logo_rough_light.png" />
					Catch Up
				</a>

				<ul className="navbar-links navbar-nav d-flex flex-row justify-contents-end">
					<li className="nav-item active me-1">
						<a className="nav-link" href="/calendar">
							Home
						</a>
					</li>
					<li className="nav-item me-1">
						<a className="nav-link" href="/mycatchups">
							CatchUps
						</a>
					</li>
					<li className="nav-item ms-1">
						<a className="nav-link" href="/mycontacts">
							Contacts
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
