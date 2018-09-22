import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY } from '../../constants/weathers';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 11,
    wind: '10 m/s',
}

const windy = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 7,
    wind: '18 m/s',
}

class WeatherLocation extends Component {
    
    constructor() {
        super();

        this.state = {
            data,
            city: 'Buenos Aires',
        };
    }

    handleUpdate = () => this.setState({data: windy});


    render() {
        const { city, data } = this.state;

        return (
            <div>
                <Location city={city} />
                <WeatherData data={data}/> 
                <button onClick={this.handleUpdate}>Actualizar</button>
            </div>
        );
    };

};

export default WeatherLocation