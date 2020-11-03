import React from 'react';
import {Context} from "./Context";


function Details(props) {
    const {activeItem,renderWeather, place} = React.useContext(Context);
    return (
        <div className="weather-container">
            <h1>Weather</h1>
            <h3>{activeItem}</h3>
                {activeItem? renderWeather(place):<h2>Select location</h2>}
        </div>
    );
}

export default Details;