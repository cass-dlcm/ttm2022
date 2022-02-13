import {Link} from "react-router-dom";
import NavBarDark from "../NavBarDark";
import './ResetRequest.css';

export default function ResetRequest() {
    return (
        <div className="reset-request">
            <NavBarDark />
            <div>
                <h1 className="rr-title">Forgot your password?</h1>
                <p id="rr-des">Enter your email address below, and we'll email instructions for setting a new one.</p>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email Address" name="email" />
            </div>
            <button id="rr-btn" type="send-email" class="btn btn-primary">Send the email</button>
        </div>
    );
}