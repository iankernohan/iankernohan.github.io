export default function GameOver({ win, time, bombsRemaining }) {
  return (
    <div className="game-over">
      <h3>Game Over</h3>
      <h4>{win ? "You Win!" : "You Lose!"}</h4>
      {win ? <h5>Time: {time}s</h5> : <h5>Bombs left: {bombsRemaining}</h5>}
    </div>
  );
}
