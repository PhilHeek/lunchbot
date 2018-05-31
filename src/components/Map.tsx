import * as React from 'react'
import { render } from 'react-dom'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import config from '../config'

const Map = compose(
  withProps({
    /**
     AIzaSyCtk3M3KPaw9DOCaSBnFPlJg97rkKbEXCw
     */
    googleMapURL: config.googleMapsApi.googleMapURL,
    loadingElement: <div style={{ height: `400px` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `300px`, width: `400px` }} />
  }), withScriptjs, withGoogleMap)(() => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      </GoogleMap>
  ));

  export default Map
