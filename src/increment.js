import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import styles from "./style";

// Stateless Component
const IncrementButton = (props) => {
  return (
    // <Box sx={{ pb: 1 }}>
    <Button sx={styles.buttonStyle} variant="contained" onClick={props.onClick}>
      Increment
    </Button>
    // </Box>
  );
};

export default IncrementButton;
