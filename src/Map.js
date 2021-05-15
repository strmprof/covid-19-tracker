import React from "react";
import "./Map.css";
import { MapContainer, TileLayer } from 'react-leaflet';
import {showDataOnMap} from './util';

function Map({ countries, casesType, center, zoom }) {
  console.log(countries, center, zoom);
  return (
    <div className="map">
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/*loop through countries draw circle*/}
    {showDataOnMap(countries, casesType)}
  </MapContainer>
    </div>
  );
}

export default Map;
