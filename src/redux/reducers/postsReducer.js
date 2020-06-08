const initialState = {
  current_page: 1,
  posts: [
    {
    id: 777,
    title: "qdsqdf",
    body: "<p>qdsfqdsf</p>",
    created_at: "2020-06-08 17:53:42",
    updated_at: "2020-06-08 17:53:42",
    user_id: 153,
    comments_count: 0,
    likes_count: 0,
    user: {
    id: 153,
    first_name: "Henk",
    last_name: "Henkson",
    favorite_color: "#311b92",
    avatar: "undefinedhenk.henkson@gmail.com",
    email: "henk.henkson@gmail.com",
    email_verified_at: null,
    created_at: "2020-06-08 17:52:53",
    updated_at: "2020-06-08 17:53:08",
    last_login_at: "2020-06-08 17:53:08"
    }
    },
    {
    id: 776,
    title: "testtom",
    body: "gljglfd",
    created_at: "2020-06-08 17:39:38",
    updated_at: "2020-06-08 17:39:38",
    user_id: 152,
    comments_count: 1,
    likes_count: 0,
    user: {
    id: 152,
    first_name: "Tom5656",
    last_name: "gdfgfkg",
    favorite_color: "#fff",
    avatar: "https://api.adorable.io/avatars/285/tom565656565@brederographics.com",
    email: "tom565656565@brederographics.com",
    email_verified_at: null,
    created_at: "2020-06-08 17:38:35",
    updated_at: "2020-06-08 17:38:42",
    last_login_at: "2020-06-08 17:38:42"
    }
    },
    {
    id: 774,
    title: "tes",
    body: "<p><strong>tst&nbsp;</strong></p>",
    created_at: "2020-06-08 17:20:16",
    updated_at: "2020-06-08 17:20:28",
    user_id: 151,
    comments_count: 0,
    likes_count: 0,
    user: {
    id: 151,
    first_name: "Angelo",
    last_name: "Keirsebilck",
    favorite_color: "#f9a373",
    avatar: "https://api.adorable.io/avatars/285/angelo@syntra.be",
    email: "angelo@syntra.be",
    email_verified_at: null,
    created_at: "2020-06-08 17:16:45",
    updated_at: "2020-06-08 17:19:02",
    last_login_at: "2020-06-08 17:19:02"
    }
    },
    {
    id: 772,
    title: "test",
    body: "<p>test</p>",
    created_at: "2020-06-08 16:54:35",
    updated_at: "2020-06-08 16:54:35",
    user_id: 28,
    comments_count: 1,
    likes_count: 1,
    user: {
    id: 28,
    first_name: "Tim",
    last_name: "Vanloocke",
    favorite_color: "NaN",
    avatar: "https://api.adorable.io/avatars/285/tim@test.com",
    email: "tim@test.com",
    email_verified_at: null,
    created_at: "2020-04-02 09:31:27",
    updated_at: "2020-06-08 16:53:46",
    last_login_at: "2020-06-08 16:53:46"
    }
    },
    {
    id: 771,
    title: "Hi",
    body: "<p>Succes met jullie eindwerk!! 🤯👍🏻👊🏼🙏🏻</p>",
    created_at: "2020-06-08 16:53:57",
    updated_at: "2020-06-08 16:53:57",
    user_id: 37,
    comments_count: 0,
    likes_count: 0,
    user: {
    id: 37,
    first_name: "Yves",
    last_name: "Loeys",
    favorite_color: "#01579b",
    avatar: "https://api.adorable.io/avatars/285/yves.loeys@gmail.com",
    email: "yves.loeys@gmail.com",
    email_verified_at: null,
    created_at: "2020-04-09 23:45:14",
    updated_at: "2020-06-08 17:52:49",
    last_login_at: "2020-06-08 17:52:49"
    }
    },
    
    {
    id: 759,
    title: "from Dr Nick",
    body: "<p>Goodnight Everybody</p>",
    created_at: "2020-06-08 00:28:12",
    updated_at: "2020-06-08 00:28:12",
    user_id: 142,
    comments_count: 3,
    likes_count: 0,
    user: {
    id: 142,
    first_name: "Jan",
    last_name: "Pirt",
    favorite_color: "#98fae5",
    avatar: "https://api.adorable.io/avatars/285/yest@test.com",
    email: "yest@test.com",
    email_verified_at: null,
    created_at: "2020-06-06 14:11:02",
    updated_at: "2020-06-08 17:03:49",
    last_login_at: "2020-06-08 17:03:49"
    }
    },
    {
    id: 736,
    title: "Hi",
    body: "<blockquote><p>i'm Danny, nice meeting you&nbsp;</p></blockquote><p>have a good <i><strong>sunday</strong></i></p>",
    created_at: "2020-06-07 21:13:50",
    updated_at: "2020-06-07 21:13:50",
    user_id: 145,
    comments_count: 2,
    likes_count: 1,
    user: {
    id: 145,
    first_name: "Danny",
    last_name: "Trejo",
    favorite_color: "#141010",
    avatar: "https://api.adorable.io/avatars/285/danny@trejo.com",
    email: "danny@trejo.com",
    email_verified_at: null,
    created_at: "2020-06-07 21:12:11",
    updated_at: "2020-06-07 21:13:52",
    last_login_at: "2020-06-07 21:13:52"
    }
    },
    {
    id: 735,
    title: "Sundays are ...",
    body: "<p>😴=&gt; 🥐☕️=&gt;🏄🏼‍♂️☀️🌴=&gt;🍕🍷=&gt; 🖥😴😴</p>",
    created_at: "2020-06-07 19:41:28",
    updated_at: "2020-06-07 19:41:28",
    user_id: 37,
    comments_count: 1,
    likes_count: 1,
    user: {
    id: 37,
    first_name: "Yves",
    last_name: "Loeys",
    favorite_color: "#01579b",
    avatar: "https://api.adorable.io/avatars/285/yves.loeys@gmail.com",
    email: "yves.loeys@gmail.com",
    email_verified_at: null,
    created_at: "2020-04-09 23:45:14",
    updated_at: "2020-06-08 17:52:49",
    last_login_at: "2020-06-08 17:52:49"
    }
    },
    {
    id: 732,
    title: "One more day",
    body: "<p>😅😅😎🙏🏻</p>",
    created_at: "2020-06-07 17:07:06",
    updated_at: "2020-06-07 17:07:06",
    user_id: 37,
    comments_count: 1,
    likes_count: 1,
    user: {
    id: 37,
    first_name: "Yves",
    last_name: "Loeys",
    favorite_color: "#01579b",
    avatar: "https://api.adorable.io/avatars/285/yves.loeys@gmail.com",
    email: "yves.loeys@gmail.com",
    email_verified_at: null,
    created_at: "2020-04-09 23:45:14",
    updated_at: "2020-06-08 17:52:49",
    last_login_at: "2020-06-08 17:52:49"
    }
    },
    {
    id: 731,
    title: "Congratz",
    body: "<p>Happy Bday….</p>",
    created_at: "2020-06-07 16:07:07",
    updated_at: "2020-06-07 16:07:07",
    user_id: 142,
    comments_count: 2,
    likes_count: 0,
    user: {
    id: 142,
    first_name: "Jan",
    last_name: "Pirt",
    favorite_color: "#98fae5",
    avatar: "https://api.adorable.io/avatars/285/yest@test.com",
    email: "yest@test.com",
    email_verified_at: null,
    created_at: "2020-06-06 14:11:02",
    updated_at: "2020-06-08 17:03:49",
    last_login_at: "2020-06-08 17:03:49"
    }
    },
    {
    id: 725,
    title: "Test netlify mobiel26",
    body: "Joehoe dames! En heren!",
    created_at: "2020-06-06 22:32:22",
    updated_at: "2020-06-08 11:13:17",
    user_id: 27,
    comments_count: 4,
    likes_count: 0,
    user: {
    id: 27,
    first_name: "tom",
    last_name: "derdaele",
    favorite_color: "#fff",
    avatar: "https://api.adorable.io/avatars/285/tom.derdaele@brederographics.com",
    email: "tom.derdaele@brederographics.com",
    email_verified_at: null,
    created_at: "2020-03-21 12:32:51",
    updated_at: "2020-06-08 17:36:30",
    last_login_at: "2020-06-08 17:36:30"
    }
    },
    {
    id: 722,
    title: "Join the Duck Army",
    body: "<p>Today!!!</p>",
    created_at: "2020-06-06 20:13:20",
    updated_at: "2020-06-06 20:13:20",
    user_id: 53,
    comments_count: 1,
    likes_count: 1,
    user: {
    id: 53,
    first_name: "Carl",
    last_name: "Vanhaelemeersch",
    favorite_color: "#004000",
    avatar: "https://api.adorable.io/avatars/285/carltest@email.com",
    email: "carltest@email.com",
    email_verified_at: null,
    created_at: "2020-04-27 18:58:12",
    updated_at: "2020-06-08 17:02:15",
    last_login_at: "2020-06-08 17:02:15"
    }
    },
    
    
    ],
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
