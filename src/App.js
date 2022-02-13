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
				<Route path="/onboard" element={<Onboard />} />
				<Route path="/onboard-2" element={<Onboard2 />} />
				<Route path="/onboard-3" element={<Onboard3 />} />
				<Route path="/onboard-4" element={<Onboard4 />} />
				<Route path="/onboard-5" element={<Onboard5 />} />
				<Route path="/onboard-6" element={<Onboard6 />} />
				<Route path="/onboard-7" element={<Onboard7 />} />
			</Routes>
		</BrowserRouter>
	);
}