import React, { Component } from 'react';
import image from '../assets/Selected.png'

const API = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&APPID=746790d46755caeb8e004dafd2305798';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {
      }
    };
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({weather: data.main, sky: data.weather[0].description, name: data.name}));
  }
    render() {
      const { weather, name, sky } = this.state;
        return (
            <div className="container">
                <header className="App-header">
                    <img src={image} className="App-logo" alt="logo" />
                </header>
                <aside className="left weather">
                  <h3>Weather Information</h3>
                  <p>Located in <span style={styles.location}>{name}</span></p>
                  <p>The present weather in {name} is <span style={styles.temp}>{(weather.temp-273.15).toFixed(2)} </span> degrees celsius at the moment & {sky}.</p>
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
let styles= {
  temp:{
    color: 'red'
  },
  location: {
    color:'blue'
  }
}
