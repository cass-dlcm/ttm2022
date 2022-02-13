import {Link} from "react-router-dom";
import React, { Component } from 'react';
import NavBarDark from "../NavBarDark";
import './Onboard6.css';

export default function Onboard() {
    return (
        <div className="Onboard">
            <NavBarDark />
            <h1 id="first">Finally, how often do you want to catch up with Mimi?</h1>
            <div class="form-group">
                <input type="text" class="form4" id="other" placeholder="Number" name="freq" />
            </div>
            <h2 id="unit-6">Per</h2>
            <div class="form-group">
                <input type="text" class="form4" id="other" placeholder="Number" name="freq" />
            </div>
            <h2 id="unit-6">Month</h2>
            <div className="button">
                <a href="/onboard-7"><button id="onboard-next">Next</button></a>
            </div>
        </div>
    );
}