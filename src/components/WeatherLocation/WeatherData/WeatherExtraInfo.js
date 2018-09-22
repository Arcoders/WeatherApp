import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weather-extra-content" >
        <span className="extrainfo-text">{ `Humedad: ${humidity} %` }</span>
        <span className="extrainfo-text">{ `Vientos: ${wind}` }</span>
    </div>
);

WeatherExtraInfo.prototypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;