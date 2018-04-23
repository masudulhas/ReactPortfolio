import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <div className="container">
              <h2 className="tagline">Contact</h2>
                <p class="lead">&ldquo;If I had asked people what they wanted, they would have said faster horses. &rdquo;<br />- Henry Ford</p>
                <hr/>
                <div>
                <Form>
                  <FormGroup row>
                    <Label for="exampleName" sm={2} size="lg">Name</Label>
                    <Col sm={10}>
                      <Input type="name" name="name" id="exampleName" className="formcontrol" placeholder="Name" bsSize="lg" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="exampleEmail" className="formcontrol" placeholder="Email" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" className="formcontrol" />
                  </FormGroup>
                </Form>
                </div>
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
            </div>
        );
    }
}

export default Contact;
