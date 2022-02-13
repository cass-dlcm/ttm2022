import {Link} from "react-router-dom";
import React, { Component } from 'react';
import './Onboard6.css';

export default function Onboard() {
    return (
        <div className="Onboard">
            <h1 className="title">
                <img src="public/logo_1.png" alt=""/>
                <a className="title-text" href="/">Catch Up</a>
            </h1>
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