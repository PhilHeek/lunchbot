import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Marker extends Component {

  render () {
    return (
        <div>
          {this.props.text}
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
