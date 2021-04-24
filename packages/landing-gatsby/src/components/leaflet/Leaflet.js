import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
          center={[60.251419, 24.858419]}
          zoom={22}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          />
          <Marker position={[60.251419, 24.858419]}>
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
