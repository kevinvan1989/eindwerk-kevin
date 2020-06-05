import { API } from "./../libs/API";

export const deletePost = postID => {
    API.delete(`/api/posts/${postID}`).then(
      response => {
        console.log(response)
      }
    )
  }