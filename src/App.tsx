import { useState } from "react";
import Heart from "./componenets/HeartComponent/Heart";
import { nanoid } from "nanoid";
import { produce } from "immer";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 1 },
      { id: 2, title: "product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart(
      produce((draft) => {
        let item = draft.items.find((item) => item.id === 1);
        if (item) item.quantity = 4;
      }),
    );
  };

  return (
    <div className={"container mt-3"}>
      <h2>Discount: {cart.discount}</h2>

      <p>Products inside cart:</p>
      <div>
        {cart.items.map((elem) => (
          <p key={nanoid()}>
            "{elem.id}" "{elem.title}" "{elem.quantity}"
          </p>
        ))}
      </div>

      <button onClick={handleClick}>click me</button>

      <Heart onClick={() => console.log("heart clicked")} />
    </div>
  );
}

export default App;
