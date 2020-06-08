import React, { Component } from "react";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { getUserProfile } from "../redux/actions/postsActions";
import moment from "moment";
import BlogpostProfile from "../components/BlogpostProfile";
import Button from "../components/Button";

class ProfilePage extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    // console.log(this.props.match.params.id);
    // const { id } = this.props.match.params;

    // API.get(`/api/users/${id}`).then((res) => {
    //   console.log("detail", res.data);
    // });

    const { id } = this.props.match.params;
    this.props.getUsersDetails(id);
    this.setState({
      loading: !this.state.loading
    });
  }

  render() {
    // const {
    //   avatar,
    //   blog_posts,
    //   comments,
    //   created_at,
    //   favorite_color,
    //   first_name,
    //   last_name,
    //   last_login_at,
    // } = this.props.post.userDetails;

   

    const { loading } = this.state;
    const { userDetails } = this.props.post;

    console.log("prof page props", this.props.auth, 'userdet', userDetails);
    const {id: userId} = this.props.auth
    return (
      <div>
        {!loading && userDetails ? (
         <div>
         {/* header */}
         <section>
           <div>
             <img src={userDetails.avatar} alt="" />
           </div>
           <div>
             <h2>{`${userDetails.first_name} ${userDetails.last_name}`}</h2>
             <h3>Member since: {moment(userDetails.created_at).format("YYYY-MM-DD")}</h3>
             {/* data totals of user */}
             <div>
               <div>
                 <h3>
                   <span class="badge badge-secondary">
                     {userDetails.comments.length}
                   </span>{" "}
                   comments
                 </h3>
               </div>
               <div>
                 <h3>
                   <span class="badge badge-secondary">
                     {userDetails.blog_posts.length}
                   </span>{" "}
                   blog posts
                 </h3>
               </div>
             </div>{" "}
             {/* end of data */}
           </div>
         </section>

         <section>
           <h2>All blog posts of {userDetails.first_name}</h2>
           {userDetails.blog_posts.map(post => (
             <BlogpostProfile blogPost={post} />
           ))}
         </section>
         <section>
           
         </section>
       </div>
         
         
        ) : (
          <ClipLoader />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  getUsersDetails: (userId) => dispatch(getUserProfile(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
