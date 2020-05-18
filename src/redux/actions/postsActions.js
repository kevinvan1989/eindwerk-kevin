import { API } from "../../libs/API";

export const fetchPost = async dispatch => {
    await API.get("/api/posts").then(response => {
      console.log('action', response.data.data);
      return dispatch({
        type: "FETCH_DATA",
        payload: response.data.data
      });
    })
};



// export const fetchPost = param => async dispatch => {
//     await API.get("/api/posts?page="+param).then(response => {
//       console.log('action', response.data.data);
//       return dispatch({
//         type: "FETCH_DATA",
//         payload: response.data
//       });
//     })
// };