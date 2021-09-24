import React, { Component } from "react";

import "./Node.css";

export default class Node extends Component {
  render() {
    const {
      col,
      isEnd,
      isStart,
      isWall,
      //   onMouseDown,
      //   onMouseEnter,
      //   onMouseUp,
      row,
      isVisited,
    } = this.props;
    const extraClassName = isEnd
      ? "node-end"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : isVisited
      ? "node-visited"
      : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        // onMouseDown={() => onMouseDown(row, col)}
        // onMouseEnter={() => onMouseEnter(row, col)}
        // onMouseUp={() => onMouseUp()}
      ></div>
    );
  }
}
