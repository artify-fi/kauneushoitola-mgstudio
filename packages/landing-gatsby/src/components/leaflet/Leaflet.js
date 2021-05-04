import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default class MyMap extends Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <MapContainer
          style={{
            height: '40vh',
            width: '60ww',
            margin: '20px',
            marginTop: '-1.4em',
          }}
          center={[60.2514, 24.85797]}
          zoom={22}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme"
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={[60.2514, 24.85797]}>
            <Popup>
              Kauneushoitola MG Studio. <br /> Tuohiaukio 4, Malminkartano.
            </Popup>
          </Marker>
        </MapContainer>
      );
    }
    return null;
  }
}
