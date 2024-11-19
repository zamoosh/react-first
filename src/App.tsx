import Alert from "./componenets/AlertComponent/Alert";
import Button from "./componenets/buttonComponent/Button";

function App() {
  return (
    <div className={"container mt-3"}>
      <Alert type={"danger"}>
        <strong>invalid</strong> data!
      </Alert>

      <Button color={"warning"} onClick={() => console.log("click")}>
        My text
      </Button>
    </div>
  );
}

export default App;
