import { useState } from "react";
import Heart from "./componenets/HeartComponent/Heart";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClickAdd = () => {
    setTags([...tags, "mohammad"]);
  };

  const handleClickRemove = () => {
    // setTags(tags.filter((tag) => tag !== "cheerful"));
    const newTags: string[] = [];
    for (let i = 0; i < tags.length - 1; i++) {
      newTags.push(tags[i])
    }
    setTags(newTags);
  };

  const handleClickUpdate = () => {
    setTags([...tags].map((tag) => (tag === "happy" ? "sadness" : tag)));
  };

  return (
    <div className={"container mt-3"}>
      <pre>{tags}</pre>
      
      <button onClick={handleClickAdd}>add</button>

      <br />

      <button onClick={handleClickRemove}>remove</button>

      <br />

      <button onClick={handleClickUpdate}>update</button>

      <Heart onClick={() => console.log("heart clicked")} />
    </div>
  );
}

export default App;
