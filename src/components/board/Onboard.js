import {Link} from "react-router-dom";
import React, { Component } from 'react';
import NavBarDark from "../NavBarDark";
import './Onboard.css';

export default function Onboard() {
    return (
        <div className="Onboard">
            <NavBarDark />
            <h1 id="first">Hi Name</h1>
            <h2 id="second">Let's add your first contact to keep up with and begin your journey with Catch Up.</h2>
            <div className="button">
                <a href="/onboard-2"><button id="onboard">Begin</button></a>
            </div>
        </div>
    );
}