import {Link} from "react-router-dom";
import React, { Component } from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <h1 className="title">
                <img src="public/logo_1.png" alt=""/>
                <a className="title-text" href="/">Catch Up</a>
            </h1>
            <h1 id="first">Stay Connected.</h1>
            <h2 id="second">Catch up with a tap</h2>
            <div className="button">
                <a href="/get-started"><button id="get-started">Get Started</button></a>
            </div>
        </div>
    );
}