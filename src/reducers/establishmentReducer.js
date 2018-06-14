const establishment = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ESTABLISHMENT':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_ESTABLISHMENT':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const establishments = (state = [], action) => {
  console.log('action: ', action);
  console.log('state: ', state);
  switch (action.type) {
    case 'ADD_ESTABLISHMENT':
      return [
        ...state,
        establishment(undefined, action)
      ]
    case 'TOGGLE_ESTABLISHMENT':
      return state.map(t =>
        establishment(t, action)
      )
    default:
      return state
  }
}

export default establishments