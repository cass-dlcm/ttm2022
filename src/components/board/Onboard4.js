import {Link} from "react-router-dom";
import React, { Component } from 'react';
import './Onboard4.css';

export default function Onboard() {
    return (
        <div className="Onboard">
            <h1 className="title">
                <img src="public/logo_1.png" alt=""/>
                <a className="title-text" href="/">Catch Up</a>
            </h1>
            <h1 id="first">How would you like to keep up with Mimi?</h1>
            <h2 id="second">Pick all of your preferred options.</h2>
            <div className="button4">
                <button id="onboard4-a">Email</button>
            </div>
            <div className="button4">
                <button id="onboard4-b">Message</button>
            </div>
            <div className="button4">
                <button id="onboard4-c">Call</button>
            </div>
            <div className="button4">
                <button id="onboard4-d">Hang Out</button>
            </div>
            <div class="form-group">
                <input type="text" class="form4" id="other" placeholder="Enter other" name="other" />
            </div>
            <div className="button">
                <a href="/onboard-5"><button id="onboard-next">Next</button></a>
            </div>
        </div>
    );
}