import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

import Marker from '../atoms/Marker';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      establishment: []
    };
 }

 render() {
   this.props.establishment.map((est, key) => {
     console.log('key: ', key);
     console.log('est.name:', est.name);
     console.log('est.lat:', est.lat);
     console.log('est.lng:', est.lng);
   })
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
            text={'MARSEILLE'}
          />
        <ul>
          {this.props.establishment.map((est, key) => <li key={key}>
            <Marker
              lat={est.lat}
              lng={est.lng}
              text={est.name}
            />
          </li>)}
        </ul>
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
