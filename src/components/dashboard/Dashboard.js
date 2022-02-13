import {Link} from "react-router-dom";
import React, { Component } from 'react';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="Dashboard">
            <h1 className="title">
                <img src="public/logo_1.png" alt=""/>
                <a className="title-text" href="/">Catch Up</a>
            </h1>
            <h1 id="first">Hi Name</h1>
            <h2 id="second">Catch up with a tap</h2>
            <div className="button">
                <a href="/get-started"><button id="get-started">Get Started</button></a>
            </div>
        </div>
    );
}