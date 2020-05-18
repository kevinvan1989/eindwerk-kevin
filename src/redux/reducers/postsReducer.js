const initialState = []

const postsReducer = (state = initialState, action) => {

  switch(action.type){
    case "FETCH_DATA":
      return action.payload
    default:
      return state
  }
}

export default postsReducer