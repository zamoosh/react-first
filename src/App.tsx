import { useState } from "react";
import Heart from "./componenets/HeartComponent/Heart";
import { nanoid } from "nanoid";

// import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, name: "bug 1", fixed: false },
    { id: 2, name: "bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      [...bugs].map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)),
    );

    // setBugs(produce((draft) => {
    //   const bug = draft.find(bug => bug.id === 1);
    //   if (bug) bug.fixed = true;
    // }))
  };

  return (
    <div className={"container mt-3"}>
      {bugs.map((elem) => (
        <div key={nanoid()}>
          {elem.name} {elem.fixed ? "true" : "false"}
        </div>
      ))}

      <button onClick={handleClick}>click me</button>

      <Heart onClick={() => console.log("heart clicked")} />
    </div>
  );
}

export default App;
