interface ResultProps {
  winner: "X" | "O" | "draw";
  onReset: () => void;
}

export default function Result({ winner, onReset }: ResultProps) {
  return (
    <div className="result">
      <h2>{winner === "draw" ? "It’s a Draw!" : `Player ${winner} Wins!`}</h2>
      <button onClick={onReset}>Play Again</button>
    </div>
  );
}
