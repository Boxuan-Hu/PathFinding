import React, { Component } from "react";
import { dijkstra } from "../algorithms/dijkstra";
import Node from "./Node/Node";
import "./PathFindingVisualizer.css";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const END_NODE_ROW = 10;
const END_NODE_COL = 30;

export class PathFindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
    };
  }

  componentDidMount() {
    this._isMounted = false;
    const grid = getInitialGrid();
    this.setState({ grid: grid });
  }

  animateDijkstra(visitedNodesInOrder) {
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const newGrid = this.state.grid.slice();
        const newNode = {
          ...node,
          isVisited: true,
        };
        newGrid[node.row][node.col] = newNode;
        this.setState({ grid: newGrid });
      }, 15 * i);
    }
  }

  visualizeDijkstra() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const endNode = grid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, endNode);
    for (let node of visitedNodesInOrder) {
      node.isVisited = false;
    }
    this.animateDijkstra(visitedNodesInOrder);
  }

  render() {
    const { grid } = this.state;
    return (
      <>
        <button onClick={() => this.visualizeDijkstra()}>
          Visualize Dijkstra's Algorithm
        </button>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div>
                {row.map((node, nodeIdx) => {
                  const { isStart, isEnd, isVisited } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      isStart={isStart}
                      isEnd={isEnd}
                      isVisited={isVisited}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isEnd: row === END_NODE_ROW && col === END_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

export default PathFindingVisualizer;
