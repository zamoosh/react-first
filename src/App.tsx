import Alert from "./componenets/AlertComponent/Alert";
import Button from "./componenets/buttonComponent/Button";
import Heart from "./componenets/HeartComponent/Heart"
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className={"container mt-3"}>
      {show && (
        <Alert onClose={() => setShow(false)} type={"danger"}>
          <strong>invalid</strong> data!
        </Alert>
      )}

      <Button
        color={"warning"}
        onClick={() => {
          console.log("ali ali ali");
          setShow(true);
        }}
      >
        My text
      </Button>
      
      <Heart />
    </div>
  );
}

export default App;
