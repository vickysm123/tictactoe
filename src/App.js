import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function onhandleClick(i) {
    const nextSquares = squares.slice();
    if (calculateWinner(squares || squares[i])) {
      return;
    }
    if (isNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsNext(!isNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (isNext ? "X" : "O");
  }

  return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => onhandleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onhandleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onhandleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => onhandleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onhandleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onhandleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => onhandleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onhandleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onhandleClick(8)} />
      </div>
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
