import ListGroup from "./componenets/ListGroup";

function App() {
  const items: string[] = ["New York", "Qom", "Tehran", "Tokyo"];
  
  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  
  return <div><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem} /></div>
}

export default App;
