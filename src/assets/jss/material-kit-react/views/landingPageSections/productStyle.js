import { container, title, container_index, container_index2 } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    //color: "#D3E0DB",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Times New Roman", serif`,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#3C4858",
  },
  description: {
    //color: "#BED0CA"
    color: "#999",
  },
  main: {
    position: "relative",
    zIndex: "3",

  },
  mainRaised: {
    margin: "60px 5px 10px",
    borderRadius: "5px",
    //background: "#166A4D",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default productStyle;
