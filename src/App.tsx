import { useState } from "react";
import Heart from "./componenets/HeartComponent/Heart";

function App() {
  const [customer, setCustomer] = useState({
    name: "Americano",
    address: {
      city: "Qom",
      zipCode: "911444",
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: "911888" },
    });
  };

  return (
    <div className={"container mt-3"}>
      {customer.address.zipCode}
      <button onClick={handleClick}>click to update customer</button>

      <Heart onClick={() => console.log("heart clicked")} />
    </div>
  );
}

export default App;
