import {Link} from "react-router-dom";

export default function ResetRequest() {
    return (
        <div className="reset-request">
            <div>
                <h1>Forgot your password?</h1>
                <p>Enter your email address below, and we'll email instructions for setting a new one.</p>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" name="email" />
            </div>
            <button type="send-email" class="btn btn-primary">Send the email</button>
        </div>
    );
}