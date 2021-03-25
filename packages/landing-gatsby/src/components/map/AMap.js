import React from 'react';
import mapboxgl from 'mapbox-gl';
import './mapstyles.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXJ0YiIsImEiOiJja21wMzMxYXQxZDVxMnByenhtZm9ma3I4In0.PN9xV0GxaUQQ1yyFjPYTyA';

class AMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 24.85842,
      lat: 60.25142,
      zoom: 16,
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [this.state.lng, this.state.lat],
          },
          properties: {
            title: 'Marker 1',
            description: 'Tuohiaukio 4, 00410, Helsinki, Malminkartano',
          },
        },
      ],
    };

    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              '<h3>' +
                marker.properties.title +
                '</h3><p>' +
                marker.properties.description +
                '</p>'
            )
        );
    });
  }
  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default AMap;
