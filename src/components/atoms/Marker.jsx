import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMarker = styled.div`
  width: 30px
  height: 30px
  border-radius: 50% 50% 50% 0
  background: #89849b
  position: absolute
  transform: rotate(-45deg)
  left: 50%
  top: 50%
  margin: -20px 0 0 -20px
  &:after
    content ''
    width 14px
    height 14px
    margin 8px 0 0 8px
    background #2F2F2F
    position absolute
    border-radius 50%
`;

class Marker extends Component {

constructor(props) {
  super(props);
}

  render () {
    return (
        <StyledMarker>
          {this.props.text}
        </StyledMarker>
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
