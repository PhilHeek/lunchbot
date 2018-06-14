import React from 'react'
import PropTypes from 'prop-types'
import Establishment from './Establishment'

const EstablishmentList = ({ establishments, onEstablishmentClick }) => (
  <ul>
    {establishments.map(establishment =>
      <Establishment
        key={establishment.id}
        {...establishment}
        onClick={() => onEstablishmentClick(establishment.id)}
      />
    )}
  </ul>
)

EstablishmentList.propTypes = {
  establishments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEstablishmentClick: PropTypes.func.isRequired
}

export default EstablishmentList