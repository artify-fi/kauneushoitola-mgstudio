import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

// const position = [51.505, -0.09]

export default class MyMap extends Component {
  render() {
    // const { options } = this.props

    if (typeof window !== 'undefined') {
      return (
        <MapContainer
          style={{ height: '100vh', width: '100wh' }}
          center={[59.23144, 26.31136]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[59.23144, 26.31136]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      );
    }
    return null;
  }
}
