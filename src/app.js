import React, { useState } from "react";
import IncrementButton from "./increment";
import styles from "./style";
import Header from "./header";
import DecrementButton from "./decrement";
import CountView from "./count";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((val) => val + 1);

  const decrement = () => setCount((val) => (val !== 0 ? val - 1 : (val = 0)));

  return (
    <div style={styles.mainDivStyle}>
      <Header />
      <CountView count={count} />
      <IncrementButton onClick={increment} />
      <DecrementButton onClick={decrement} />
    </div>
  );
};

export default App;
