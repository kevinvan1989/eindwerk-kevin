const initialState = { current_page: 1, posts: false };

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        // Get the 'current_page' element out of data/payload
        current_page: action.payload.current_page,
        // Last page
        last_page: action.payload.last_page,
        // Get the list of posts out of data/payload
        posts: action.payload.data}
    default:
      return state;
  }
};

export default postsReducer;