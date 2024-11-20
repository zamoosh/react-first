import Heart from "./componenets/HeartComponent/Heart";
import Message from "./Message";

function App() {
  return (
    <div className={"container mt-3"}>
      <Heart onClick={() => console.log("heart clicked")} />

      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default App;
