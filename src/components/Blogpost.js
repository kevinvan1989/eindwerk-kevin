import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useStore, connect } from "react-redux";
import commentIcon from "../assets/icons/comment.png";
import commentIconDark from "../assets/icons/comment-icon-dark.png";
import Time from "./Time";
import Button from "./Button";
import Userinfo from "./Userinfo";


class Blogpost extends Component {

  render() {
    const {
      body,
      comments_count,
      created_at,
      id,
      title,
      updated_at,
      user,
      user_id: userId,
    } = this.props.postDetail;

    const {auth} = this.props

    console.log('auth in blogpost', auth)

    return (
      <div className="blogpost">
        <article>
          <Time created_at={created_at} exactTime={true} />
          <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
          {/* <h1>{parse(title)}</h1> */}
          <div
            className="body-txt"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
          <Time created_at={created_at} />
          {/* <button>Read more</button> ==> new button comp */}
        </article>

        <aside>
           <Userinfo 
            userId={userId}
            imgUrl={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}/>
          <p>
            <img src={commentIconDark} alt="" className="comment-icon" />
            {comments_count} comments
          </p>

          {/* Check if user is logged in */}
          {
          (auth.user !== 'not set' && <Button btnText={`ADD COMMENT`} url={`/postdetail/${id}`} ref={'#comment-editor'}/>) ||
          // Set non active + hover effect (login to add comment)
          (auth.user === 'not set' && <Button btnText={'ADD COMMENT (to disable)'} CSS="disabled" type='button' disabled/>)
        }
          <Button btnText={`SEE DETAILS`} url={`/postdetail/${id}`}/>

          {/* 
          TODO :  DELETE 
          <Link to={`/postdetail/${id}`}>
            SEE <br />
            DETAILS
          </Link> */}
        </aside>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {auth: state.auth}
)

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Blogpost)