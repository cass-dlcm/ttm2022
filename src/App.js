// App.js
import Home from "./components/account/Home";
import GetStarted from "./components/account/GetStarted";
import SignIn from "./components/account/SignIn";
import SignUp from "./components/account/SignUp";
import ResetRequest from "./components/account/ResetRequest";
import Onboard from "./components/board/Onboard";
import Onboard2 from "./components/board/Onboard2";
import Onboard3 from "./components/board/Onboard3";
import Onboard4 from "./components/board/Onboard4";
import Onboard5 from "./components/board/Onboard5";
import Onboard6 from "./components/board/Onboard6";
import Onboard7 from "./components/board/Onboard7";
import Contact from "./components/contact/Contact";
import CatchUps1 from "./components/catch-ups/CatchUps1";
import CatchUps2 from "./components/catch-ups/CatchUps2";
import CatchUps3 from "./components/catch-ups/CatchUps3";
import CatchUps4 from "./components/catch-ups/CatchUps4";
import CatchUps5 from "./components/catch-ups/CatchUps5";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
				<Route path="/onboard" element={<Onboard />} />
				<Route path="/onboard-2" element={<Onboard2 />} />
				<Route path="/onboard-3" element={<Onboard3 />} />
				<Route path="/onboard-4" element={<Onboard4 />} />
				<Route path="/onboard-5" element={<Onboard5 />} />
				<Route path="/onboard-6" element={<Onboard6 />} />
				<Route path="/onboard-7" element={<Onboard7 />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/catch-ups-1" element={<CatchUps1 />} />
				<Route path="/catch-ups-2" element={<CatchUps2 />} />
				<Route path="/catch-ups-3" element={<CatchUps3 />} />
				<Route path="/catch-ups-4" element={<CatchUps4 />} />
				<Route path="/catch-ups-5" element={<CatchUps5 />} />
			</Routes>
		</BrowserRouter>
	);
}
