import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateMap } from '../../actions/location';

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

      this.props.onSubmitLocation({ address, lat, lng });
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
  onSubmitLocation: location => dispatch(updateMap(location))
});

const Address = connect(null, mapDispatchToProps)(AddressForm);


export default Address;
