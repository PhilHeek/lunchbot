import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import { connect } from 'react-redux';
import locationAction from '../../actions/location';
import establishmentAction from '../../actions/establishment';

const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCtk3M3KPaw9DOCaSBnFPlJg97rkKbEXCw',
  Promise: Promise
});

const StyledAddEstablishment = styled.div`
    position: relative;
`;

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: #00A87B;
  border: 2px solid #00A87B;
`;

const StyledInput = styled.input`
    display: block;
  margin: 0;
  padding: 0.8rem 1.6rem;
  color: inherit;
  width: 100%;
  height: 1rem;
  font-family: inherit;
  font-size: 2.1rem;
  font-weight: inherit;
  line-height: 1.8;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    outline: none;
  }
`;

class AddressForm extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit (values) {
    googleMapsClient.geocode({address: values.address})
    .asPromise()
    .then((response) => {
      let address = response.json.results[0].formatted_address;
      let lat = response.json.results[0].geometry.location.lat;
      let lng = response.json.results[0].geometry.location.lng;

      // console.log('Response from googleMapsClient: ', response.json.results[0]);
      this.props.onSubmitLocation({ address, lat, lng });
      fetch('http://localhost:3000/establishments/' + lat + '&' + lng)
      .then(response => response.json())
      .then(data => {
        data.forEach(est => {
          let estAddress = est.location.address1;
          let estName = est.name;
          let estIsClose = est.is_closed;
          let estLatitude = est.coordinates.latitude;
          let estLongitude = est.coordinates.longitude;

          console.log('addresse: ', estAddress);
          console.log('name: ', estName);
          console.log('latitude: ', estLatitude);
          console.log('longitude: ', estLongitude);
          this.props.onReceiveEstablishment({ estAddress, estName, estIsClose, estLatitude, estLongitude });
        });



      })
      .catch(err => console.log(err));

   })
   .catch((err) => {
     console.log(err);
   });
  }

  render () {
    return (
      <StyledAddEstablishment>
        <Form
          onSubmit={this.submit}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
            <Field
              name="address"
              component="input" />
            <button type="submit" disabled={submitting}>
               Locate
             </button>
         </form>
         )}
        />
      </StyledAddEstablishment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmitLocation: location => dispatch(locationAction.updateMap(location)),
  onReceiveEstablishment: estLocation => dispatch(establishmentAction.AddEstablishment(estLocation))
});

const Address = connect(null, mapDispatchToProps)(AddressForm);


export default Address;
