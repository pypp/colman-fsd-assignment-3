import { OIcon, XIcon } from '../assets';
import type { Player } from './Game';

interface CellProps {
  value: Player;
  onClick: () => void;
}

const Cell = ({ value, onClick }: CellProps) => (
  <div className="cell" onClick={onClick}>
    {value && <img src={value === 'X' ? XIcon : OIcon} alt={value} />}
  </div>
);

export default Cell;
