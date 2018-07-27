import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

import Marker from '../atoms/Marker';

class Map extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '65vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCtk3M3KPaw9DOCaSBnFPlJg97rkKbEXCw" }}
          center={this.props.center}
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
  zoom: 15
};

const mapStateToProps = state => ({
  center: state.location
});

const MapUpdated = connect(mapStateToProps, null)(Map);


export default MapUpdated;
