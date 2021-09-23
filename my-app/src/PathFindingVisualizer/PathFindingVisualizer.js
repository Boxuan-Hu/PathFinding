import React, { Component } from "react";
import Node from "./Node/Node";
import "./PathFindingVisualizer.css";

export class PathFindingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    const nodes = [];
    for (let row = 0; row < 15; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = {
          col,
          row,
          isStart: row === 10 && col === 5,
          isEnd: row === 10 && col === 45,
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    this.setState({ nodes: nodes });
  }

  render() {
    const nodes = this.state.nodes;
    return (
      <div className="grid">
        {nodes.map((row, rowIdx) => {
          return (
            <div>
              {row.map((node, nodeIdx) => {
                const { isStart, isEnd } = node;
                return <Node key={nodeIdx} isStart={isStart} isEnd={isEnd} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default PathFindingVisualizer;
