import React, { Component } from 'react';
import io from "socket.io-client";

class Contact extends Component {
  constructor(props){
      super(props);

      this.state = {
          username: '',
          message: '',
          messages: []
      };

      this.socket = io('localhost:5000');

      this.socket.on('RECEIVE_MESSAGE', (data) =>{
          addMessage(data);
      });

      const addMessage = data => {
          console.log(data);
          this.setState({messages: [...this.state.messages, data]});
          console.log(this.state.messages);
      };

      this.sendMessage = ev => {
          ev.preventDefault();
          this.socket.emit('SEND_MESSAGE', {
              author: this.state.username,
              message: this.state.message
          })
          this.setState({message: ''});

      }
  }
    render() {
        return (
            <div className="container">
              <h2 className="tagline">Contact</h2>
                <p className="lead">&ldquo;If I had asked people what they wanted, they would have said faster horses. &rdquo;<br />- Henry Ford</p>
                 <hr/>

                <aside className="left">
                  <h4>Follow me</h4>
                  <a href="https://se.linkedin.com/in/masudulhasan" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i>Linkedin</a><br/>
                  <a href="https://twitter.com/masud33bd" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a>
                </aside>
                <aside className="right">
                  <h4>E-mail: masudulhas@gmail.com</h4>
                  <h4>phone: 0046769486680</h4>
                </aside>
                <aside className="foot">
                <h5>  &copy; 2018, All rights reserve</h5>
                </aside>
                <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Comment Box</div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div key={message}>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                                <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                <br/>
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Contact;
