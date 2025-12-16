import { useState } from 'react';
import Board from './Board';
import Result from './Result';

export type Player = 'X' | 'O' | null;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'draw'>(null);

  const checkWinner = (newBoard: Player[]) => {
    for (const [a, b, c] of winningCombinations) {
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return newBoard.every((cell) => cell) ? 'draw' : null;
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);

    if (result) {
      setWinner(result);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="game">
      <Board board={board} onCellClick={handleCellClick} />
      {winner && <Result winner={winner} onReset={resetGame} />}
    </div>
  );
};

export default Game;
