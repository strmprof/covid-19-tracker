import React from 'react'
import numeral from 'numeral';
import {Circle, Popup} from 'react-leaflet';

export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a,b) => {
        if(a.cases > b.cases) {
            return -1;
        } else {
            return 1;
        }
    });
    return sortedData;
}

//drwa circle on the map
export const showDataOnMap = (data, casesType='cases') => (
    data.map(country => (
        <Circle center={[country.countryInfo.lat, country.countryInfo.lng]}
        fillOpacity={0.4} ></Circle>
    ))
);