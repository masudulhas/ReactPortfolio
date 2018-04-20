import React, { Component } from 'react';
import image from '../assets/Selected.png'

const API = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&APPID=746790d46755caeb8e004dafd2305798';
class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: {
      },
    };
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({weather: data.main, sky: data.weather[0].description}));
  }
    render() {
      const { weather } = this.state;
        return (
            <div className="container">
                <header className="App-header">
                    <img src={image} className="App-logo" alt="logo" />
                </header>
                <aside className="left weather">
                  <h3>Weather Information</h3>
                  <p>Located in Stockholm</p>
                  <p>The weather in Stockholm is {(weather.temp-273.15).toFixed(2)} degrees celsius at the moment & {this.state.sky}</p>
                </aside>
                <article className="centered">
                  <h1>Masudul Hasan</h1>
            		  <p className="">Interactive resume</p>
                  <a href="#profile">  <i className="fa fa-chevron-down" aria-hidden="true"></i></a>

                </article>

            </div>
        );
    }
}

export default Home;
