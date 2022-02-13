// App.js
import Home from "./components/account/Home";
import GetStarted from "./components/account/GetStarted";
import SignIn from "./components/account/SignIn";
import SignUp from "./components/account/SignUp";
import ResetRequest from "./components/account/ResetRequest";
import {BrowserRouter, Route, Routes} from "react-router-dom";


export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/get-started" element={<GetStarted />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/reset-request" element={<ResetRequest />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}