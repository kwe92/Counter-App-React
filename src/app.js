import React, { useState } from "react";
import IncrementButton from "./features/counter_page/components/increment";
import styles from "./style";
import Header from "./features/counter_page/components/header";
import DecrementButton from "./features/counter_page/components/decrement";
import CountView from "./features/counter_page/components/count";

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
