import styles from "../../../style";
import Button from "@mui/material/Button";
const DecrementButton = (props) => (
  <Button sx={styles.buttonStyle} variant="contained" onClick={props.onClick}>
    Decrement
  </Button>
);

export default DecrementButton;
