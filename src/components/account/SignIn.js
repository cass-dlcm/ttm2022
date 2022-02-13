import {Link} from "react-router-dom";
import './SignIn.css';

export default function SignIn() {
    return (
        <div className="sign-in">
            <h1 className="sub-title">
                <img src="public/logo_1.png" alt=""/>
                <a className="sub-title-text" href="/">Catch Up</a>
            </h1>
            <h1 className="si-title">Welcome back!</h1>
            <div className="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email Address" name="email" />
            </div>
            <div className="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password" name="password" />
            </div>
            <button id="si-btn" type="sign-in" class="btn btn-primary">Sign In</button>
            <div className="reset-link"><a href="/reset-request">Forgot my password</a></div>
        </div>
    );
}