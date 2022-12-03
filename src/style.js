// const width = 110;

const styles = {
  //  elements and fill entire screen with the div
  mainDivStyle: {
    // div bg color
    backgroundColor: "#ede9e8",
    display: "flex",
    alignItems: "center",
    // the direction of your flex box | column or row
    flexDirection: "column",
    height: "100%",
    width: "100%",
    // needed to make dive take up entire screen
    position: "fixed",
    top: 0,
    left: 0,
  },

  headDiveStyle: {
    backgroundColor: "#a32cc4",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  h1: {
    color: "white",
  },
  buttonStyle: {
    width: "60%",
    backgroundColor: "purple",
    margin: 0.5,
  },
  countStyle: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
};

export default styles;
