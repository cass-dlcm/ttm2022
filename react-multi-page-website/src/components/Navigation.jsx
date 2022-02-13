import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	return (
		<div className="navigation">
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<div className="container">
					<NavLink className="navbar-brand" to="/">
						Catch up
					</NavLink>
					<div>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink className="nav-link" to="/">
									Home
									<span className="sr-only">(current)</span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/About">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/MyCatchUps">
									My Catch Ups
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/NewContact">
									My Contacts
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
