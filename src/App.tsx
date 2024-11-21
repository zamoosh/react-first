import { useState } from "react";
import Heart from "./componenets/HeartComponent/Heart";
import { nanoid } from "nanoid";
import { produce } from "immer";

function App() {
  const [pizza, setPizza] = useState({
    name: "spicy pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza(
      produce((draft) => {
        draft.toppings.push("Pepper", "Cheese");
      }),
    );
  };

  return (
    <div className={"container mt-3"}>
      <h2>{pizza.name}</h2>
      <h3>{pizza.toppings}</h3>

      <button onClick={handleClick}>click me</button>

      <Heart onClick={() => console.log("heart clicked")} />
    </div>
  );
}

export default App;
