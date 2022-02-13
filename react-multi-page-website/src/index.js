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
	GetStarted,
} from "./components";

ReactDOM.render(
	<Router>
		<Navigation />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<MyCatchUps />} />
			<Route path="/contact" element={<MyContacts />} />
			<Route path="/blog" element={<NewContact />}>
				<Route path="" element={<ContactFrequency />} />
				<Route path="" element={<ContactInfo />} />
				<Route path="" element={<ContactMessage />} />
				<Route path="" element={<ContactNotes />} />
				<Route path="" element={<ContactType />} />
				<Route path="" element={<GetStarted />} />
			</Route>
		</Routes>
		<Footer />
	</Router>,

	document.getElementById("root")
);

serviceWorker.unregister();
