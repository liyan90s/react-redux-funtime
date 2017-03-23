import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
  __renderWeatherList(cityData) {
    const name  = cityData.city.name;
    const temps = cityData.list.map((weather) => {
      return weather.main.temp;
    });
    const pressures = cityData.list.map((weather) => {
      return weather.main.pressure;
    });
    const humidities = cityData.list.map((weather) => {
      return weather.main.humidity;
    });
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name} >
        <td>
          <GoogleMap 
            lon={lon} 
            lat={lat} />
        </td>
        <td><Chart data={temps} color="yellow" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover" id="weather-list">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.__renderWeatherList)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);