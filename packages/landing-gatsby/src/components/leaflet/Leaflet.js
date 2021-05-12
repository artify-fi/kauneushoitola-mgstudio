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
        </WrapperMapContainer>
      );
    }
    return null;
  }
}
