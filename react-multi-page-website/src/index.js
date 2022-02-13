import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
	Navigation,
	Footer,
	Home,
	About,
	MyCatchUps,
	MyContacts,
	ContactFrequency,
	ContactInfo,
	ContactMessage,
	ContactNotes,
	ContactType,
	ContactGetStarted,
} from "./components";

ReactDOM.render(
	<Router>
		<Navigation />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/mycatchups" element={<MyCatchUps />} />
			<Route path="/mycontacts" element={<MyContacts />} />
			<Route path="/contactfrequency" element={<ContactFrequency />} />
			<Route path="/contactinfo" element={<ContactInfo />} />
			<Route path="/contactmessage" element={<ContactMessage />} />
			<Route path="/contactnotes" element={<ContactNotes />} />
			<Route path="/contacttype" element={<ContactType />} />
			<Route path="contactgetstarted" element={<ContactGetStarted />} />
		</Routes>
		<Footer />
	</Router>,

	document.getElementById("root")
);

serviceWorker.unregister();
