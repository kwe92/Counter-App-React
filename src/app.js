import React, { useState } from "react";
import IncrementButton from "./increment";
import styles from "./style";
import Header from "./header";
import DecrementButton from "./decrement";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((val) => val + 1);

  const decrement = () => setCount((val) => (val !== 0 ? val - 1 : (val = 0)));

  return (
    <div style={styles.mainDivStyle}>
      <Header />
      <div
        style={{
          height: "50%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p> Count: {count}</p>
      </div>
      <IncrementButton onClick={increment} />
      <DecrementButton onClick={decrement} />
    </div>
  );
};

export default App;
