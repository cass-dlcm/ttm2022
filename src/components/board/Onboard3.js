import {Link} from "react-router-dom";
import React, { Component } from 'react';
import './Onboard3.css';

export default function Onboard() {
    return (
        <div className="Onboard">
            <h1 className="title">
                <img src="public/logo_1.png" alt=""/>
                <a className="title-text" href="/">Catch Up</a>
            </h1>
            <h1 id="first">So, who is Mimi to you?</h1>
            <div className="button3">
                <button id="onboard3-a">Family Member</button>
            </div>
            <div className="button3">
                <button id="onboard3-b">Friend</button>
            </div>
            <div className="button3">
                <button id="onboard3-c">Partner</button>
            </div>
            <div class="form-group">
                <input type="text" class="form3" id="other" placeholder="Enter other" name="other" />
            </div>
            <div className="button">
                <a href="/onboard-4"><button id="onboard-next">Next</button></a>
            </div>
        </div>
    );
}