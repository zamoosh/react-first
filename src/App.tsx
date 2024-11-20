import { useState } from "react";
import Heart from "./componenets/HeartComponent/Heart";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: (drink.price += 1) });
  };

  return (
    <div className={"container mt-3"}>
      {drink.price}
      <button onClick={handleClick}>click to update price</button>

      <Heart onClick={() => console.log("heart clicked")} />
    </div>
  );
}

export default App;
