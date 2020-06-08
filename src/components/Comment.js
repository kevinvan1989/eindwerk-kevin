import React, { Component } from 'react'
import Time from './Time'
import Userinfo from "./Userinfo"

export default class Comment extends Component {

  render() {
    const { blog_post_id, body, created_at, id: commentID, updated_at } = this.props.commentData
    const { id: userId, avatar, first_name, last_name, last_login_at, favorite_color } = this.props.commentData.user

    return (
      <div className="flex comment m-3 p-3 card">
        <div className="flex__item flex__item--left grid-container grid__area">
          <div className="grid__col">
          <Userinfo 
            userId={userId}
            imgUrl={{avatar: avatar, avatar_class: "grid__item--img"}}
            name_class="grid__item--username"
            firstName={first_name}
            lastName={last_name}
            optClassNames={true}/>
          </div>

        </div>
        <div className="flex__item flex__item--right comment__text">
          <Time created_at={created_at} exactTime={true}/>
          <div
              className="body-txt"
              dangerouslySetInnerHTML={{ __html: body }}
            ></div>
        </div>
      </div>
    )
  }
}
