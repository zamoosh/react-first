import ListGroup from "./componenets/ListGroup";

function App() {
  const items: string[] = ["New York", "Qom", "Tehran", "Tokyo"];
  
  return <div><ListGroup items={items} heading={"Cities"} /></div>
}

export default App;
