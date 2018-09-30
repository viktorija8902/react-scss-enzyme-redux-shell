let initialState = {
  data: null,
  error: false,
}

const results = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ERROR':
      console.log(action.error)
      return Object.assign({}, state, {
        error: true,
      })
    case 'LOAD_DATA':
      console.log("action.data", action.data)
      return Object.assign({}, state, {
        data: action.data
      })
    default:
      return state
  }
}

export default results;