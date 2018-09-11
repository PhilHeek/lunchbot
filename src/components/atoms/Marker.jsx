import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RestaurantMenu from '@material-ui/icons/RestaurantMenu';
import Place from '@material-ui/icons/Place';

const StyledMarker = styled.div`
  width: 20px
  height: 20px
  border-radius: 50% 50% 50% 50%
  background: #d22b22
  border-style: solid
  border-width: 5px
  border-color: #4eba4e
  position: absolute
  left: 50%
  top: 50%
  margin: -20px 0 0 -20px
`;

class Marker extends Component {

constructor (props) {
  super(props);
  console.log('Marker location:', this.props.location);
}

  render () {

    const Icon = this.props.location ? <Place /> : <RestaurantMenu />;

    return (
      <div>
          {Icon}
      </div>
    );
  }
}

Marker.propTypes = {
  text: PropTypes.string
};

Marker.defaultProps = {
  text: 'ORIGINAL MARKER'
};



export default Marker;
