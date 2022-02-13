// App.js
import Home from "./components/account/Home";
import GetStarted from "./components/account/GetStarted";
import SignIn from "./components/account/SignIn";
import SignUp from "./components/account/SignUp";
import ResetRequest from "./components/account/ResetRequest";
import Calendar from "./components/dashboard-main/Calendar";
import Dashboard from "./components/dashboard/Dashboard"; //NEEDS to be deleted durring merge
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/get-started" element={<GetStarted />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/reset-request" element={<ResetRequest />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}
