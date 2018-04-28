import React, { Component } from 'react';

const COMMENT_API = 'http://localhost:8080/user_info'

class Contact extends Component {
  constructor(props){
      super(props);
     
      this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleSubmit(e) {
        e.preventDefault();
        var self = this;
        // On submit of the form, send a POST request with the data to the server.
        fetch(COMMENT_API, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: 
                JSON.stringify({
                "user_name": self.userName.value,
                    "user_comment": self.userComment.value
                })
            
        })

    }
    render() {
        const { user_info } = this.props; 
        return (
            <div className="container">
              <h2 className="tagline">Contact</h2>
                <p className="lead">&ldquo;If I had asked people what they wanted, they would have said faster horses. &rdquo;<br />- Henry Ford</p>
                 <hr/>

                <aside className="left">
                  <h4>Follow me</h4>
                    <a href="https://se.linkedin.com/in/masudulhasan" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i>Linkedin</a><br/>
                    <a href="https://twitter.com/masud33bd" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</a>
                </aside>
                <aside className="right">
                  <h4>E-mail: masudulhas@gmail.com</h4>
                  <h4>phone: 0046769486680</h4>
                </aside>
                <aside className="foot">
                <h5>  &copy; 2018, All rights reserve</h5>
                </aside>
                <form onSubmit={this.handleSubmit}>
                    <input ref={(ref) => { this.userName = ref }} placeholder="User Name" type="text" name="user_name" /><br />
                    <input ref={(ref) => { this.userComment = ref }} placeholder="Comment" type="text" name="user_comment" /><br />
                    <button type="Submit">Submit</button>
                </form>
                 {user_info.map((value) => {
                    return (<p key={value.user_id}>{value.user_name}:{value.user_comment}</p>);
                })} 
          </div>
        );
    }
}

export default Contact;
