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
            <h1 id="first">All set!</h1>
            <h2 id="second">You have scheuled a Catch Up with Mimi on 03/14/22,</h2> 
            <h2 id="second">one month from today</h2>
            <div className="button">
                <a href="/onboard-2"><button id="onboard">VIEW ALL CATCH UPS</button></a>
            </div>
        </div>
    );
}