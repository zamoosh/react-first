import { useState } from "react";
import Heart from "./componenets/HeartComponent/Heart";
import { nanoid } from "nanoid";
import { produce } from "immer";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "john",
    }
  });

  const handleClick = () => {
    setGame(produce(draft => {
      draft.player.name = "Mohammad"
    }))
  };

  return (
    <div className={"container mt-3"}>
      
      <h2>{game.player.name}</h2>
      <h3>{game.id}</h3>

      <button onClick={handleClick}>click me</button>

      <Heart onClick={() => console.log("heart clicked")} />
    </div>
  );
}

export default App;
