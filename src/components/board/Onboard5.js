import {Link} from "react-router-dom";
import React, { Component } from 'react';
import './Onboard5.css';

export default function Onboard() {
    return (
        <div className="Onboard">
            <h1 className="title">
                <img src="public/logo_1.png" alt=""/>
                <a className="title-text" href="/">Catch Up</a>
            </h1>
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