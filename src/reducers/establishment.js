const establishment = (state, action) => {
  switch (action.type) {
    case 'SHOW_ESTABLISHMENT':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const establishments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        establishment(undefined, action)
      ]
    default:
      return state
  }
}

export default establishments