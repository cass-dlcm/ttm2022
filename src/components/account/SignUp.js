import {Link} from "react-router-dom";
import NavBarDark from "../NavBarDark";
import './SignUp.css';

export default function SignUp() {
    
    return (
        <div className="sign-up">
            <NavBarDark />
            <h1 className="su-title">Welcome to Catch Up!</h1>
            <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email Address" name="email" />
            </div>
            <div className="form-group">
                <input type="tel" class="form-control" id="phone" placeholder="Phone Number" name="phone" />
            </div>
            <div className="form-group" data-provide="datepicker">
                <input type="text" class="form-control" name="birthday" />
                <div class="input-group-addon">
                    <span class="glyphicon glyphicon-th"></span>
                </div>
            </div>
            <div className="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password" name="password" />
            </div>
            <div className="form-group">
                <input type="password" class="form-control" id="re-password" placeholder="Confirm Password" name="re-password" />
            </div>
            <div className="consent">
                <input type="checkbox" id="consent" name="scales" /> 
                <label for="scales">I consent to receive emails regarding my schedules and notifications from Catch Up.</label>
            </div>
            <div className="button">
                <a href="/onboard"><button id="su-btn">CREATE ACCOUNT</button></a>
            </div>
        </div>
    );
}