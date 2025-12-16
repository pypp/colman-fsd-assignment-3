import xImg from "../assets/x.png";
import oImg from "../assets/o.png";
import type { Player } from "./Game";

interface CellProps {
  value: Player;
  onClick: () => void;
}

export default function Cell({ value, onClick }: CellProps) {
  return (
    <div className="cell" onClick={onClick}>
      {value && <img src={value === "X" ? xImg : oImg} alt={value} />}
    </div>
  );
}
