import React from 'react'
import FilterLink from '../../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_WITH_LOCATION">
      With Location
    </FilterLink>
  </p>
)

export default Footer