// App.js
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ResetRequest from "./components/ResetRequest";
import {BrowserRouter, Route, Routes} from "react-router-dom";


export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/reset-request" element={<ResetRequest />} />
			</Routes>
		</BrowserRouter>
	);
}