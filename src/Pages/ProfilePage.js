import React, { Component } from 'react'
import { API } from "../libs/API";

export default class ProfilePage extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
        const { id } = this.props.match.params;
    
        API.get(`/api/users/${id}`).then((res) => {
          console.log("detail", res.data);
        });
      }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}