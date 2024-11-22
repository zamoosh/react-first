import { useEffect } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

function App() {
  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  return <div className={"container mt-3"}></div>;
}

export default App;
