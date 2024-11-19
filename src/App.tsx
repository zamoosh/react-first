import Heart from "./componenets/HeartComponent/Heart";

function App() {
  return (
    <div className={"container mt-3"}>
      <Heart onClick={() => console.log("heart clicked")} />
    </div>
  );
}

export default App;
