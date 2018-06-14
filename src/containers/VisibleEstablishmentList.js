import { connect } from 'react-redux'
import { toggleEstablishment } from '../actions'
import EstablishmentList from '../components/molecules/EstablishmentList'

const getVisibleEstablishments = (establishments, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return establishments
    case 'SHOW_COMPLETED':
      return establishments.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return establishments.filter(t => !t.completed)
    default:
  }
}

const mapStateToProps = (state) => {
  return {
    establishments: getVisibleEstablishments(state.establishments, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEstablishmentClick: (id) => {
      dispatch(toggleEstablishment(id))
    }
  }
}

const VisibleEstablishmentList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EstablishmentList)

export default VisibleEstablishmentList