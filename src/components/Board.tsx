import Cell from "./Cell";
import type { Player } from "./Game";

interface BoardProps {
  board: Player[];
  onCellClick: (index: number) => void;
}

const Board = ({ board, onCellClick }: BoardProps) => (
  <div className="board">
    {board.map((value, index) => (
      <Cell key={index} value={value} onClick={() => onCellClick(index)} />
    ))}
  </div>
);

export default Board;
