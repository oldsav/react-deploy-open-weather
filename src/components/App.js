import React from "react";
import LocationList from "./LocationList";
import Details from "./Details";
import { Context } from "./Context";
import wetherService from "./Service";


function App() {
  let service = new wetherService();
  const PLACES = [
    { name: "Moscow", lat: 55.755825, lon: 37.617298 },
    { name: "Kazan", lat: 55.830433, lon: 49.066082 },
    { name: "Yoshkar-Ola", lat: 56.63189, lon: 47.89793 },
    { name: "Cheboksary", lat: 56.134837, lon: 47.243472 },
  ];
  const [lat, setLat] = React.useState(0);
  const [lon, setLon] = React.useState(0);
  const [place, setPlace] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);
  const getWeather = (lat, lon) => {
    service.getWeather(lat, lon).then((item) => {
      setPlace(item);
    });
  };
  const renderWeather = (arr) => {
    let main = arr.current.weather[0].main;
    let [icon] = arr.current.weather;
    if (arr) {
      return (
        <ul className="weather-detail">
          <img
            src={`http://openweathermap.org/img/wn/${icon.icon}@2x.png`}
            alt="img"
          ></img>
          <li className="item">Condition: {main}</li>
          <li className="item">Clouds: {arr.current.clouds}%</li>
          <li className="item">Pressure: {arr.current.pressure} hPa</li>
          <li className="item">Wind speed: {arr.current.wind_speed}m/s</li>
          <li className="item">
            Temperature: {arr.current.temp}&#x212a;/
            {(arr.current.temp - 273.15).toFixed(1)}&#x2103;
          </li>
          </ul>
      );
    }
  };
  const renderCities = (arr) => {
    return arr.map((city) => {
      return (
        <li
          className={
            activeItem === city.name ? "item-city active" : "item-city"
          }
          key={city.name}
          onClick={() => {
            setActiveItem(city.name);
            setLat(city.lat);
            setLon(city.lon);
          }}
        >
          <a href="#">{city.name}</a>
        </li>
      );
    });
  };
  React.useEffect(() => {
    getWeather(lat, lon);
  }, [activeItem]);

  return (
    <Context.Provider
      value={{ renderWeather, PLACES, place, renderCities, activeItem }}
    >
      <div className="App">
        <LocationList />
        <Details />
      </div>
    </Context.Provider>
  );
}

export default App;
