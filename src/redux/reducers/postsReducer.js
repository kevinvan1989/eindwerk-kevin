const initialState = { current_page: 1, posts: [] };

const postsReducer = (state = initialState, action) => {
  console.log('action.payload', action.payload)
  switch (action.type) {
    case "FETCH_DATA":
      return {
        // Get the 'current_page' element out of data/payload
        current_page: action.payload.current_page,
        // Last page
        last_page: action.payload.last_page,
        // Get the list of posts out of data/payload
        posts: action.payload.data}

    case "ADD_NEW_POST":
      return action.payload
      
    default:
      return state;
  }
};

export default postsReducer;