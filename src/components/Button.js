import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Button extends Component {
  render() {
    const { btnText, url, type, disabled, func } = this.props;
    console.log(disabled)
    if (url) {
      return (<Link to={url} >
        <button>{btnText}</button>
      </Link>)
    }else if(func){
      return <button onClick={func}>{btnText}</button>
    }
    else
    {
      return <button type={type} disabled={disabled}>{btnText}</button>
    }
  }
}
