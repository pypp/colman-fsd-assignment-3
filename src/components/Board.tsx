import Cell from "./Cell";
import type { Player } from "./Game";

interface BoardProps {
  board: Player[];
  onCellClick: (index: number) => void;
}

export default function Board({ board, onCellClick }: BoardProps) {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
}
