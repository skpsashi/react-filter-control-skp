import { useState } from "react";
import FilterControlDemo from "./demo/demo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FilterControlDemo />
    </>
  );
}

export default App;
