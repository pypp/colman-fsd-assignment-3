import { OIcon, XIcon } from "../assets";
import type { Player } from "./Game";

interface CellProps {
  value: Player;
  onClick: () => void;
}

export default function Cell({ value, onClick }: CellProps) {
  return (
    <div className="cell" onClick={onClick}>
      {value && <img src={value === "X" ? XIcon : OIcon} alt={value} />}
    </div>
  );
}
