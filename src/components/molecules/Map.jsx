import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../atoms/Marker';

class Map extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '65vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCtk3M3KPaw9DOCaSBnFPlJg97rkKbEXCw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={48.862334}
            lng={2.350453}
            text={'TUTUTUTUTTU'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

Map.defaultProps = {
  center: {
    lat: 48.862334,
    lng: 2.350453
  },
  zoom: 15
};


export default Map;
