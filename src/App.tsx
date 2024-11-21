import { useState } from "react";
import Heart from "./componenets/HeartComponent/Heart";
import TextExpandable from "./componenets/TextExpandableComponent/TextExpandable";
import { nanoid } from "nanoid";
import { produce } from "immer";

function App() {
  return (
    <div className={"container mt-3"}>
      <TextExpandable maxChars={100}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TextExpandable>
      
      {/* <br /> */}
      {/* <Heart onClick={() => console.log("heart clicked")} /> */}
    </div>
  );
}

export default App;
