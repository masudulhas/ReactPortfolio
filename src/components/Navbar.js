import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
//import styled from 'styled-components';
import Home from './Home';
import Profile from './Profile';
import Experiences from './Experiences';
import Abilities from './Abilities';
import Projects from './Projects';
import Contact from './Contact';

class Navbar extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/Profile">Profile</NavLink></li>
                        <li><NavLink to="/Experiences">Experiences</NavLink></li>
                        <li><NavLink to="/Abilities">Abilities</NavLink></li>
                        <li><NavLink to="/Projects">Projects</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/Profile" component={Profile} />
                        <Route path="/Experiences" component={Experiences} />
                        <Route path="/Abilities" component={Abilities} /> 
                        <Route path="/Projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Navbar;
