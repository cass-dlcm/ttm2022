import {Link} from "react-router-dom";

export default function SignIn() {
    return (
        <div className="sign-in">
            <h1>Sign In</h1>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" name="email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password" name="password" />
            </div>
            <button type="sign-in" class="btn btn-primary">Sign In</button>
            <div><a href="/reset-request">Forgot my password</a></div>
        </div>
    );
}