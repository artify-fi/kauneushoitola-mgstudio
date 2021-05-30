import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styled from 'styled-components';

const WrapperMapContainer = styled.section`
  padding-bottom: 0px;
  overflow: hidden;
  @media (min-width: 990px) {
    margin-top: 3em;
    width: 70vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default class MyMap extends Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <WrapperMapContainer>
          <MapContainer
            style={{
              height: '40vh',
              width: 'auto',
              margin: '40px',
            }}
            center={[60.2514, 24.85797]}
            zoom={21}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=8d7822692bc24fd4a0c03d2f210558be"
            />
            <Marker position={[60.2514, 24.85797]}>
              <Popup>
                Kauneushoitola MG Studio. <br /> Tuohiaukio 4, Malminkartano.
              </Popup>
            </Marker>
          </MapContainer>
        </WrapperMapContainer>
      );
    }
    return null;
  }
}
