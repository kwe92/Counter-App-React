import styles from "../../../style";

const CountView = (props) => (
  <div style={styles.countStyle}>
    <p> Count: {props.count}</p>
  </div>
);

export default CountView;
