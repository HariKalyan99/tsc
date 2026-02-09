import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Counter value={count} />
      <button onClick={() => setCount((prev) => prev + 1)}>+ 1</button>
    </div>
  );
};

export default App;
