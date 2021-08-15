import React, {Component} from 'react';

// Set Board Rows and Columns
const totalBoardRows = 50;
const totalBoardColumns = 50;

// Set Up Board Status
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

// Set Up Board Grid
const BoardGrid = ({boardStatus, onToggleCellStatus}) => {
  const handleClick = (r,c) => onToggleCellStatus(r,c);
  const tr = [];
  for (let r=0; r< totalBoardRows; r++) {
    const td= [];
    for (let c=0; c < totalBoardColumns; c++) {
      td.push(<td key={`${r},${c}`} className={boardStatus[r][c] ? 'alive' : 'dead'} onClick={() => handleClick(r,c)} />);
    }
    tr.push(<tr key={r}>{td}</tr>);
  }
  return <table><tbody>{tr}</tbody></table>;
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
