import React, { Component } from 'react';
import image from '../assets/Selected.png'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <header className="App-header">
                    {/* <img src={image} className="App-logo" alt="logo" /> */}
                </header>
                <article class="centered">
        <h1>Masudul Hasan</h1>
  		  <p class="">Interactive resume</p>
        <a href="#profile">  <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
      </article>
            </div>
        );
    }
}

export default Home;
