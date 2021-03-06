import {Link} from "react-router-dom";
import React, { Component } from 'react';
import NavBarDark from "../NavBarDark";
import './Contact.css';

export default function Contact() {
    return (
        <div className="Contact">
            <NavBarDark />
            <div className="button">
                <a href="/catch-ups-1"><button id="contact-back">Back</button></a>
            </div>
            <h1 id="first">All Contacts</h1>
            <h2 id="second">Add and adjust to your liking.</h2>
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