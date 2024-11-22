import { useEffect, useState } from "react";

interface Props {
  selectedCategory: string;
}

function Product({ selectedCategory }: Props) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in", selectedCategory);
    setProducts(["Clothing", "household"]);
  }, [selectedCategory]);

  return (
    <>
      <ul className="list-group">
        {products.map((p) => (
          <li key={p} className="list-group-item">
            {p}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;
