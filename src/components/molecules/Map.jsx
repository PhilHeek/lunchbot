import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

import Marker from '../atoms/Marker';

class Map extends Component {
  constructor (props) {
    super(props);

    this.state = {
      establishment: []
    };
 }

 render () {
   const Markers = this.props.establishment.map((est, index) => (
       <Marker
         key={index}
         lat={est.lat}
         lng={est.lng}
         text={est.name}
       />
  ));

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '65vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCtk3M3KPaw9DOCaSBnFPlJg97rkKbEXCw' }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.center.latitude}
            lng={this.props.center.longitude}
            location
            text={'TOTO'}>
          </Marker>
          {Markers}
        </GoogleMapReact>
      </div>
    );
  }
}

Map.defaultProps = {
  zoom: 15
};

const mapStateToProps = state => ({
  center: state.location,
  establishment: state.establishment
});

const MapUpdated = connect(mapStateToProps, null)(Map);


export default MapUpdated;
