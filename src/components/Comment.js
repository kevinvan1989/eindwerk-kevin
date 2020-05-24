import React, { Component } from 'react'
import Time from './Time'

export default class Comment extends Component {

  render() {
    const { blog_post_id, body, created_at, id, updated_at } = this.props.commentData
    const { avatar, first_name, last_name, last_login_at, favorite_color } = this.props.commentData.user

    return (
      <div className="flex comment">
        <div className="flex__item flex__item--left grid-container grid__area">
          <div className="grid__col grid__item--more">
            [icon] check out profile
          </div>
          <div className="grid__col">
            <img src={avatar} alt="No image" className="grid__item--img"/>
            <h2 className="grid__item--username">{`${first_name} ${last_name ? last_name : ""}`}</h2>
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
