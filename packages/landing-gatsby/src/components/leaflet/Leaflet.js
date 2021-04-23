import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default class MyMap extends Component {
  render() {
    // const { options } = this.props

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
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
