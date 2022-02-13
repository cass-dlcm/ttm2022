import {Link} from "react-router-dom";

export default function SignUp() {
    
    return (
        <div className="sign-up">
            <h1>Create your account</h1>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" name="email" />
            </div>
            <div class="birthday" data-provide="datepicker">
                <input type="text" class="form-control" name="birthday" />
                <div class="input-group-addon">
                    <span class="glyphicon glyphicon-th"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password" name="password" />
            </div>
            <div class="form-group">
                <label for="re-password">Confirm password</label>
                <input type="password" class="form-control" id="re-password" placeholder="Confirm your password" name="re-password" />
            </div>
            <button type="sign-up" class="btn btn-primary">Sign Up</button>
        </div>
    );
}