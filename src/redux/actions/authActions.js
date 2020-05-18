import { API } from "../../libs/API";

// Een type dispatchen en een payload
export const getUser = dispatch => {
    API.get("/api/user").then(response => {
      console.log('action', response, dispatch);
      return dispatch({
        type: "SET_USER",
        payload: response.data
      });
    })
};
