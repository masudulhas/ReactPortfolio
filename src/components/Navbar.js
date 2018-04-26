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

const COMMENT_API = 'http://localhost:8080/user_info'

const Navbar = () => {
        this.state = {
            user_info: []
        }

      const fetchData = () =>{
          fetch(COMMENT_API)
          .then(response => response.json())
          .then(data => this.setState({ user_info: data }));
        }

            return (
            <HashRouter>
                <div className="toggole">
                  {/* <a href="javascript:void(0);"><i className="fa fa-bars menu" aria-hidden="true"></i></a> */}
                    <ul className="nav">
                        <li><NavLink exact to="/" activeStyle={{ color: 'green'}}><i className="fa fa-home" aria-hidden="true"></i>Home</NavLink></li>
                        <li><NavLink to="/Profile" activeStyle={{ color: 'green'}}><i className="fa fa-user" aria-hidden="true"></i>Profile</NavLink></li>
                        <li><NavLink to="/Experiences" activeStyle={{ color: 'green'}}><i className="fa fa-battery-three-quarters" aria-hidden="true"></i>Experiences</NavLink></li>
                        <li><NavLink to="/Abilities" activeStyle={{ color: 'green'}}><i className="fa fa-star-half-o" aria-hidden="true"></i>Abilities</NavLink></li>
                        <li><NavLink to="/Projects" activeStyle={{ color: 'green'}}><i className="fa fa-laptop" aria-hidden="true"></i>Projects</NavLink></li>
                        <li><NavLink to="/contact" activeStyle={{ color: 'green'}}><i className="fa fa-address-card" aria-hidden="true"></i>Contact</NavLink></li>
                    </ul>
                    <div className="nav">
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

export default Navbar;
