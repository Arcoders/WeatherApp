import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { 
    CLOUD, 
    CLOUDY, 
    SUN,
    RAIN,
    SNOW, 
    WINDY
} from '../../../constants/weathers';
import './style.css';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return 'cloud';
        case CLOUDY:
            return 'cloudy';
        case SUN:
            return 'day-sunny';
        case RAIN: 
            return 'rain';
        case SNOW:
            return 'snow';
        case WINDY:
            return 'windy';
        default:
            return 'day-sunny';
    }
};

const getWeatherIcon = weatherState => {
    return (
        <WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x" />        
    )
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weather-temperature-content">
        { getWeatherIcon(weatherState) }
        <span className="temperature">{temperature}</span>
        <span className="temperature-type">Cº</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string
}

export default WeatherTemperature;