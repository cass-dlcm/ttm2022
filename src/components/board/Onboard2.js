import {Link} from "react-router-dom";
import React, { Component } from 'react';
import NavBarDark from "../NavBarDark";
import './Onboard2.css';

export default function Onboard2a() {
    return (
        <div className="Onboard2a">
            <NavBarDark />
            <h1 id="first">Let's started with your contact's info</h1>
            <div className="form-group">
                <input type="text" class="form-control" id="nickname" placeholder="Nickname" name="nickname" />
            </div>
            <div className="form-group" data-provide="datepicker">
                <input type="text" class="form-control" name="birthday" />
                <div class="input-group-addon">
                    <span class="glyphicon glyphicon-th"></span>
                </div>
            </div>
            <div className="form-group">
                <input type="tel" class="form-control" id="phone" placeholder="Phone Number" name="phone" />
            </div>
            <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email Address" name="email" />
            </div>
            <div className="button">
                <a href="/onboard-3"><button id="onboard-next">Next</button></a>
            </div>
        </div>
    );
}