import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Experiences from './Experiences';
import Abilities from './Abilities';
import Projects from './Projects';
import Contact from './Contact';

const COMMENT_API = 'http://localhost:8080/user_info'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_info: []
        }
    }

     componentDidMount() {
          fetch(COMMENT_API)
          .then(response => response.json())
          .then(data => this.setState({ user_info: data }));
        }
    render() {
            return (
            <HashRouter>
                <div className="toggole">
                    <ul className="nav">
                        <li><NavLink exact to="/" activeStyle={{ color: 'green'}}><i className="fa fa-home" aria-hidden="true"></i>Home</NavLink></li>
                        <li><NavLink to="/profile" activeStyle={{ color: 'green'}}><i className="fa fa-user" aria-hidden="true"></i>Profile</NavLink></li>
                        <li><NavLink to="/experiences" activeStyle={{ color: 'green'}}><i className="fa fa-battery-three-quarters" aria-hidden="true"></i>Experiences</NavLink></li>
                        <li><NavLink to="/abilities" activeStyle={{ color: 'green'}}><i className="fa fa-star-half-o" aria-hidden="true"></i>Abilities</NavLink></li>
                        <li><NavLink to="/projects" activeStyle={{ color: 'green'}}><i className="fa fa-laptop" aria-hidden="true"></i>Projects</NavLink></li>
                        <li><NavLink to="/contact" activeStyle={{ color: 'green'}}><i className="fa fa-address-card" aria-hidden="true"></i>Contact</NavLink></li>
                    </ul>
                    <div className="nav">
                        <Route exact path="/" component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/experiences" component={Experiences} />
                        <Route path="/abilities" component={Abilities} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" render={() => <Contact user_info={this.state.user_info} />} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Navbar;
