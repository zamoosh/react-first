import Product from "./componenets/product/ProductList/Product";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className={"container mt-3"}>
      <div className={"mb-3"}>
        <select
          onChange={(event) => setCategory(event.target.value)}
          className="form-select"
        >
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
      </div>
      <Product selectedCategory={category} />
    </div>
  );
}

export default App;
