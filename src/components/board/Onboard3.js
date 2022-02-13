import {Link} from "react-router-dom";
import React, { Component } from 'react';
import NavBarDark from "../NavBarDark";
import './Onboard3.css';

export default function Onboard() {
    return (
        <div className="Onboard">
            <NavBarDark />
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