import {Link} from "react-router-dom";
import React, { Component } from 'react';
import './CatchUps3.css';

export default function CatchUps3() {
    return (
        <div className="catch-ups-3">
            <h1 className="title">
                <img src="public/logo_1.png" alt=""/>
                <a className="title-text" href="/">Catch Up</a>
            </h1>
            <div className="button">
                <a href="/catch-ups-2"><button id="contact-back">Back</button></a>
            </div>
            <h1 id="first">New Catch Up</h1>
            <h2 id="second">Pick a contact and schedule your new catch up.</h2>
            <div>
                <div>
                    <button className="contact" id="contact-a">Abigail</button>
                </div>
                <div >
                    <button className="contact" id="contact-b">Benjamin</button>
                </div>
                <div >
                    <button className="contact" id="contact-c">Cathy</button>
                </div>
                <div >
                    <button className="contact"id="contact-d">Darling</button>
                </div>
                <div class="form-group">
                    <input type="text" id="contact-add" placeholder="Add new" name="add-contact" />
                </div>
            </div>
        </div>
    );
}