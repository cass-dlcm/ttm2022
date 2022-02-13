import {Link} from "react-router-dom";
import NavBarDark from "../NavBarDark";
import './SignIn.css';

export default function SignIn() {
    return (
        <div className="sign-in">
            <NavBarDark />
            <h1 className="si-title">Welcome back!</h1>
            <div className="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email Address" name="email" />
            </div>
            <div className="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password" name="password" />
            </div>
            <div className="button">
                <a href="/onboard"><button id="su-btn">SIGN IN</button></a>
            </div>
            <div className="reset-link"><a href="/reset-request">Forgot my password</a></div>
        </div>
    );
}