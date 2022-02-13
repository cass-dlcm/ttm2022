import {Link} from "react-router-dom";
import './SignUp.css';

export default function SignUp() {
    
    return (
        <div className="sign-up">
            <h1 className="sub-title">
                <img src="public/logo_1.png" alt=""/>
                <a className="sub-title-text" href="/">Catch Up</a>
                <a id="su-a" href="/sign-in"><button id="su-sign-in">Sign in</button></a>
            </h1>
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
            <button id="su-btn" type="sign-up" class="btn btn-primary">CREATE ACCOUNT</button>
        </div>
    );
}