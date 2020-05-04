import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Overview from './Overview';


class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam unde itaque obcaecati, eos aspernatur rem ab, repellat provident quo quaerat atque sint asperiores dignissimos blanditiis vitae mollitia officia, nobis enim?
          Ipsa laboriosam magnam ex est, velit error, dicta distinctio nemo iusto eos, officiis dolores perferendis iure aliquid fugit id omnis! Dolores nostrum amet magnam similique voluptates officiis possimus minima dicta!
          Quos nam molestiae repellendus dicta, atque nisi voluptates facilis magni consequatur quis inventore assumenda eaque nostrum cumque asperiores. Illo nulla fuga et porro eligendi, aut nam officia esse dolore quidem.
          Earum consequuntur illo rem adipisci, dolorum modi quisquam magni reprehenderit similique accusamus excepturi obcaecati aperiam. Dignissimos omnis saepe ea, neque optio aliquid inventore alias commodi perferendis libero beatae unde corporis?
          Ea voluptas asperiores nesciunt voluptates quisquam veniam eveniet, harum, cum corrupti ducimus dicta nihil? Velit voluptatum corporis vel quas, obcaecati expedita accusantium enim veritatis reprehenderit in labore vitae tenetur harum.
        </div>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, sit doloremque ea in dolorum placeat commodi. Eligendi fugiat, quas libero nemo vel facilis id ea nulla dolores deserunt laboriosam maxime?</p>

          {/* DEZE BTN MOET VERWIJZEN NAAR EEN ANDERE PAGINA */}
          <div className="btn">
            Go to B
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;