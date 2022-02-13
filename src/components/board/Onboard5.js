import {Link} from "react-router-dom";
import React, { Component } from 'react';
import NavBarDark from "../NavBarDark";
import './Onboard5.css';

export default function Onboard() {
    return (
        <div className="Onboard">
            <NavBarDark />
            <h1 id="first">What do Mimi like to talk to you about?</h1>
            <h2 id="second">You guys mush have favorite conversation topics.</h2>
            <h2 id="second">Yes, write that down, just in case.</h2>
            <div className="form-input">
                <input type="text" id="fav-text" placeholder="Write down favorite topics" name="fav-text" />
            </div>
            <div className="button">
                <a href="/onboard-6"><button id="onboard-next">Next</button></a>
            </div>
        </div>
    );
}