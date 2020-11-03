import React from "react";
import { Context } from "./Context";

function LocationList(props) {
  const { renderCities,PLACES } = React.useContext(Context);
  return (
    <section className="loc-container">
      <ul className="list-city">{renderCities(PLACES)}</ul>
    </section>
  );
}

export default LocationList;
