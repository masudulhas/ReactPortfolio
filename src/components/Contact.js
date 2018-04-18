import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="container">
              <h2 className="tagline">Contact</h2>
      <p class="lead">&ldquo;If I had asked people what they wanted, they would have said faster horses. &rdquo;<br />- Henry Ford</p>
      <hr/>
      <aside className="left">
        <h4>Follow me</h4>
        <a href="https://se.linkedin.com/in/masudulhasan" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i>Linkedin</a><br/>
        <a href="https://twitter.com/masud33bd" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a>
      </aside>
      <aside class="right">
        <h4>E-mail: masudulhas@gmail.com</h4>
        <h4>phone: 0046769486680</h4>
      </aside>

<aside className="foot">
  &copy; 2018, All rights reserve
</aside>
            </div>
        );
    }
}

export default Contact;
