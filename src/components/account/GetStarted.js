import {Link} from "react-router-dom";
import React, { Component } from 'react';
import NavBarDark from "../NavBarDark";
import './GetStarted.css';

export default function GetStarted() {
    return (
        <div className="get-started">
            <NavBarDark />
            <h1 id="first">Ready?</h1>
            <div className="button">
                <a href="/sign-up"><button id="sign-up">Sign Up</button></a>
                <br /><span>Already have an account? </span>
                <a href="/sign-in">Sign In</a>
            </div>
        </div>
    );
}
