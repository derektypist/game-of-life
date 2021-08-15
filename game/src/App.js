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

// Set Up Slider
const Slider = ({speed, onSpeedChange}) => {
  const handleChange = e => onSpeedChange(e.target.value);
  return (
    <input 
      type='range'
      min='50'
      max='1000'
      step='50'
      value={speed}
      onChange={handleChange} />
  );
};

// Set Up App Class
class App extends Component {
  state = {
    boardStatus: myNewBoardStatus(),
    generation: 0,
    isGameRunning: false,
    speed: 500
  };

  runStopButton = () => {
    return this.state.isGameRunning ? <button type='button' onClick={this.handleStop}>Stop</button> : <button type='button' onClick={this.handleRun}>Start</button>;
  }
}

export default App;
