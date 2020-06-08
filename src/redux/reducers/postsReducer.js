const initialState = {
  current_page: 1,
  posts: [{
    body: "<p></p>",
comments_count: 0,
created_at: "2020-06-08 16:32:47",
id: 767,
likes_count: 0,
title: "Well",
updated_at: "2020-06-08 16:32:47",
user: {
  avatar: "undefinedparel@pot.com",
created_at: "2020-06-08 16:23:03",
email: "parel@pot.com",
email_verified_at: null,
favorite_color: "#9c27b0",
first_name: "parel",
id: 149,
last_login_at: "2020-06-08 16:33:26",
last_name: "pot",
updated_at: "2020-06-08 16:33:26"
}

  }],
  postDetail: {},
  particularComment: "",
  // Init values to prevent destructure probs
  userDetails: {
    avatar: ' ',
    blog_posts: [],
    comments: ' ',
    created_at: ' ',
    favorite_color: ' ',
    first_name: ' ',
    last_name: ' ',
    last_login_at: ' '
  },
  loading: true
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        // Get the 'current_page' element out of data/payload
        current_page: action.payload.current_page,
        // Last page
        last_page: action.payload.last_page,
        // Get the list of posts out of data/payload
        posts: action.payload.data,
      };

    case "ADD_COMMENT": {
      return {
        ...state,
        particularComment: action.payload,
      };
    }

    case "ADD_NEW_POST":
      return action.payload;

    case "SHOW_DETAIL":
      return { ...state, postDetail: action.payload };

    case "SET_USER_DETAILS":
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };

      // TODO fix redux actions / reducers
      case "DELETE":
        const posts = {...state.posts}
        const postId = action.payload


        console.log(posts)
        

        // return{}

     
        return{
          ...state
        }

    default:
      return state;
  }
};

export default postsReducer;
