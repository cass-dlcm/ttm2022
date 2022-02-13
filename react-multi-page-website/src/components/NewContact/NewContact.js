import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";

export default function NewContact() {
	return (
		<div className="home">
			<div class="container">
				<h1 className="text-center mt-5">New Contact Page</h1>
				<Outlet />
			</div>
		</div>
	);
}
