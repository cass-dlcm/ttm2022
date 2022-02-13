import {Link} from "react-router-dom";
import React, { Component } from 'react';
import NavBarDark from "../NavBarDark";
import './CatchUps1.css';

export default function CatchUps1() {
    return (
        <div className="catch-ups-1">
            <NavBarDark />
            <h1 id="first">Your Catch Ups</h1>
            <h2 id="second">Manage your Catch ups and schedule new ones.</h2>
            <div>
                <h1 id="first">Next Catch Ups</h1>  
                <div>
                    <button className="contact" id="contact-a">
                        <h3>ABIGAIL, colleague</h3>
                        <h5>* Fish and fishbones</h5>
                        <h5>* 15 mins</h5>
                    </button>
                </div>
                <div >
                    <button className="contact" id="contact-b">
                        <h3>BENJAMIN, family</h3>
                        <h5>* New job offer</h5>
                        <h5>* 10 mins</h5>
                    </button>
                </div>
                <div className="button">
                    <a href="/catch-ups-3"><button id="catch-up">NEW CATCH UP</button></a>
                </div>
            </div>
            <div>
                <h1 id="first">Next Catch Ups</h1>  
                <div>
                    <button className="contact" id="contact-a">
                        <h3>KOKO, colleague</h3>
                        <h5>* Little Flowsers</h5>
                        <h5>* 30 mins</h5>
                    </button>
                </div>
                <div className="button">
                    <a href="/contact"><button id="onboard">VIEW MORE</button></a>
                </div>
            </div>
        </div>
    );
}