import React, {Component} from 'react';

// Set Board Rows and Columns
const totalBoardRows = 50;
const totalBoardColumns = 50;

const myNewBoardStatus = (cellStatus = ( )=> Math.random() < 0.3) => {
  const grid = [];
  for (let r=0; r< totalBoardRows; r++) {
    grid[r] = [];
    for (let c=0; c < totalBoardColumns; c++) {
      grid[r][c] = cellStatus;
    }
  }
  return grid;
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
