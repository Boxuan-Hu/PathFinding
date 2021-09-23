import React, { Component } from "react";
import "./Node.css";

export class Node extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { isStart, isEnd } = this.props;
    const extraClassName = isStart ? "node-start" : isEnd ? "node-end" : "";
    return <div className={`node ${extraClassName}`}></div>;
  }
}

export default Node;
