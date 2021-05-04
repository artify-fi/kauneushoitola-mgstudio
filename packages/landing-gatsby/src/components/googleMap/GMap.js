import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const GMap = ({ location, zoomLevel }) => (
  <div className="map">
    {/* <h2 className="map-h2">MG Studio kartalla.</h2> */}

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC3Simf8MCYLX3q8fRSNCcAtewRk2LWYmM' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default GMap;

// import React, { Component } from 'React'

// import { Map, GoogleApiWrapper, Marker } from 'google-maps-React';

// export class MapComponent extends Component {

//   render() {

//     return (<div className="map-area">

//       <Map

//         google={this.props.google}

//         zoom={14}

//         center={{

//           lat: 60.251419,

//           lng: 24.858419

//         }}>

//         <Marker key="marker_1"

//           position={{

//             lat: 60.251419,

//             lng: 24.858419

//           }}

//         />

//       </Map>

//     </div>);

//   }

// }

// export default GoogleApiWrapper({

//   apiKey: ('AlzaSyBmoLAJR2oWhUWjsEETeLRjjPtTlcOsJmXo')

// })(MapComponent);

// import React from 'react'
// import GoogleMapReact from 'google-map-react'

// const defaultProps = {
//   center: {
//     lat: 60.251419,
//     lng: 24.858419,
//   },
//   zoom: 11,
// }

// const AnyReactComponent = ({ text }) => <div>{text}</div>

// const GoogleMap = () => (
//   <div style={{ height: '40vh', width: '70%', margin: 'auto' }}>
//     <GoogleMapReact
//       // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
//       bootstrapURLKeys={{ key: 'AIzaSyC3Simf8MCYLX3q8fRSNCcAtewRk2LWYmM' }}
//       defaultCenter={defaultProps.center}
//       defaultZoom={defaultProps.zoom}
//     >
//       <AnyReactComponent
//         lat={60.251419}
//         lng={24.858419}
//         text={'MG Studio'}
//       />
//     </GoogleMapReact>
//   </div>
// )

// export default GoogleMap

// import React, { Component } from 'React'

// import { Map, GoogleApiWrapper, Marker } from 'google-maps-React';

// export class MapComponent extends Component {

//   render() {

//     return (

//       <>

//         <Map
//           style={{ height: '40vh', width: '70%', margin: 'auto' }}
//           google={this.props.google}

//           zoom={18}

//           center={{

//             lat: 60.251419,

//             lng: 24.858419

//           }}>

//           {/* <Marker key="marker_1"

//           position={{

//             lat: 60.251419,

//             lng: 24.858419

//           }}

//         /> */}

//         </Map>

//       </>);

//   }

// }

// export default GoogleApiWrapper({

//   apiKey: ('AIzaSyC3Simf8MCYLX3q8fRSNCcAtewRk2LWYmM')

// })(MapComponent);
