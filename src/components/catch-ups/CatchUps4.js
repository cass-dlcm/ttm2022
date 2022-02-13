import {Link} from "react-router-dom";
import React, { Component } from 'react';
import NavBarDark from "../NavBarDark";
import './CatchUps4.css';

export default function CatchUps4() {
    return (
        <div className="Onboard">
            <NavBarDark />
            <div className="button">
                <a href="/catch-ups-3"><button id="contact-back">Back</button></a>
            </div>
            <h1 id="first">Catch Up Info</h1>
            <h2 id="second">Pick a contact and schedule your new catch up.</h2>
            <div class="form-group">
                <input type="text" class="form4" id="other" placeholder="Number" name="freq" />
            </div>
            <h2 id="unit-6">Per</h2>
            <div class="form-group">
                <input type="text" class="form4" id="other" placeholder="Number" name="freq" />
            </div>
            <h2 id="unit-6">Month</h2>
            <div className="button">
                <a href="/catch-ups-7"><button id="onboard-next">Next</button></a>
            </div>
        </div>
    );
}