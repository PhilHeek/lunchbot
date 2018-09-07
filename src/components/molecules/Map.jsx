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
   console.log(this.props.establishment);
   this.props.establishment.map((est, key) => {
     console.log('Single establishment = ', est);
  });

   const Markers = this.props.establishment.map((est, index) => {
       <Marker
         lat={est.lat}
         lng={est.lng}
         text={est.name}
       />;
   });

   console.log('Markers: ', Markers);

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
            text={'TITI'}
          />
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
