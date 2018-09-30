let initialState = {
  data: null,
  error: false,
}

const results = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ERROR':
      return Object.assign({}, state, {
        error: JSON.stringify(action.error)
      })
    case 'LOAD_DATA':
      console.log("action.data", action.data)
      return Object.assign({}, state, {
        data: JSON.stringify(action.data)
      })
    default:
      return state
  }
}

export default results;