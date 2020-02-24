import React from "react";
import { Map, Placemark } from "react-yandex-maps";

export default function YMap({ state, coordinates }) {
  coordinates.map(console.log);
  
  return (
    <span className="main">
        <Map state={state} height='400px' width='100%'>
          {coordinates.map(item => (<Placemark geometry={item} />))}
        </Map>
    </span>
  );
}
