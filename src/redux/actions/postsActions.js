import { API } from "../../libs/API";



export const fetchPost  = page => (dispatch) => {
     API.get("/api/posts?page="+page).then(response => {
      console.log('action', response.data.data);
      return dispatch({
        type: "FETCH_DATA",
        payload: response.data
      });
    })
}

export const addNewPost = (values) => dispatch =>{
  //console.log('user in create post', user)
  console.log('values in create post', values)
  API.post("/api/posts", {"title": 'replace-this', 'body': 'replace-this'}).then(response => {
    console.log('addnewpost', response)
    return dispatch({
      type: "ADD_NEW_POST",
      payload: response.data
    })
  })
}


// export const fetchPost = param => async dispatch => {
//     await API.get("/api/posts?page="+param).then(response => {
//       console.log('action', response.data.data);
//       return dispatch({
//         type: "FETCH_DATA",
//         payload: response.data
//       });
//     })
// };