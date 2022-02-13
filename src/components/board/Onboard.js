import {Link} from "react-router-dom";
import React, { Component } from 'react';
import './Onboard.css';

export default function Onboard() {
    return (
        <div className="Onboard">
            <h1 className="title">
                <img src="public/logo_1.png" alt=""/>
                <a className="title-text" href="/">Catch Up</a>
            </h1>
            <h1 id="first">Hi Name</h1>
            <h2 id="second">Let's add your first contact to keep up with and begin your journey with Catch Up.</h2>
            <div className="button">
                <a href="/onboard-2"><button id="onboard">Begin</button></a>
            </div>
        </div>
    );
}