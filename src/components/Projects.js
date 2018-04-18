import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div className="container">
      <h2 className="tagline">Projects</h2>
      <p className="lead">&ldquo;You can do anything you set your mind to.&rdquo;<br />- Benjamin Franklin</p>
      <hr/>
      <aside className="left">
        <h4>Project Name: Car Rental</h4>
        <span>Description: This is a car rental system. We made <br/>this project by using C# and SQL. </span>
      </aside>
      <aside className="right">
        <h4>Project Name: Learning Management System(LMS)</h4>
        <span>Description: This is a LMS system. We made this project by using HTML5, CSS3 and Javascript. </span>
      </aside>

      <aside className="left">
        <h4>Project Name: Portfolio</h4>
        <span>Description: This is a single Project. I made <br/>this project by using HTML5, CSS3 and Javascript. </span>
      </aside>
      <aside className="right">
        <h4>Project Name: Monster fighting based on GIS</h4>
        <span>Description: This is a game project. We made this project by using React, Bootstrap, Node.js, PHP, MySQL, and GPS system. </span>
      </aside>

      <aside className="left">
        <h4>Project Name: Portfolio with backend</h4>
        <span>Description: This is a single Project. I made <br/>this project by using React, Node.js </span>
      </aside>
      <aside className="right">
        <h4>Project Name: AbsentPrediction</h4>
        <span>Description: This is a group Project with PingPong company. We made this project by using Vue.js, Vuetify, Node.js. </span>
      </aside>
            </div>
        );
    }
}

export default Project;
