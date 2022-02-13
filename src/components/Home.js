import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="Home" class="row t-5">
            <h1>
                <Link to='/'>Catch Up</Link>
            </h1>
            <div>
                <a href="/sign-in"><button>Sign In</button></a>
                <a href="/sign-up"><button>Sign Up</button></a>
            </div>
        </div>
    );
}