import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import weather from './actions';
import axios from 'axios';
function App(props) {

function getLocation(location) {
 console.log("location ", location);
  let lat = location.coords.latitude;
  let lng = location.coords.longitude;
 
  axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f9c1de82af230a54f7dd17a15e29cf23`)
  .then(res => {
    props.getCurrentWeatherDetails(res.data.name);
  })
  
}


function handleSubmit(e) {
  e.preventDefault();
  if(e.target.children[1].value === '') {
      navigator.geolocation.getCurrentPosition(getLocation);
  }
  else {
    props.getCurrentWeatherDetails(e.target.children[1].value);
  }
}

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="wid">Please provide weather id</label>
        <input type="text" id="wid" />
      </form>
        {Object.keys(props.weatherDetails).length !== 0?
        <ul>
        <li>MAX_TEMP: {props.weatherDetails.max_temp}</li> 
        <li>MIN_MIN: {props.weatherDetails.min_temp}</li>
        <li>DESCRIPTION: {props.weatherDetails.description}</li>
        </ul>:null 
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  weatherDetails: state.weatherData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentWeatherDetails:(city) => dispatch(weather(city))
  }
  
} 

export default connect(mapStateToProps,mapDispatchToProps)(App);
