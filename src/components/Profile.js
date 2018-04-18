import React, { Component } from 'react';

class Profile extends Component {
    render() {

        return (
            <div className="container">
                <h2>Profile</h2>
                <p className="lead">I am a creative front-end developer</p>
                <hr/>
                <aside className="left">
                <h3>About me</h3>
                <p>I am an allround web developer. I am a junior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.</p>
                </aside>
                <aside className="right center" >
                    <h3>Details</h3>
                    <h4>Name:</h4>
                    Masudul Hasan
          <h4>Age:</h4>
                    36 years
    			<h4>Location:</h4>
                    Klapperstensvagen 8, stockholm, Sweden
        </aside>
            </div>
        );
    }
}

export default Profile;
let styles = {
    left: {
      display: 'flex',
      border: '1px #ccc solid',
      justifycontent:'space-between'
         },
    right: {
        // width: '60%',
        // paddingtop: '20px'
    }


}
