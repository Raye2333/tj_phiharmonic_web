import { container, title, container_index, container_index2 } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  container_index: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container_index
  },
  container_index2: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container_index2
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    color: "#3C4858",
    margin: "1.75rem 0rem 0.7rem",
    textDecoration: "none",
    fontWeight: "500",
    display: "inline-block",
    position: "relative",
    marginTop: "5px",
    marginBottom: "50px",
    minHeight: "20px",
    color: "#FFFFFF",
    textDecoration: "none",
    fontFamily: `"Italic", serif`
  },
  description_eng: {
    color: "#3C4858",
    display: "inline-block",
    position: "relative",
    color: "#FFFFFF",
    fontWeight: "300",
    fontFamily: `"Italic", serif`
  },
  description_chn: {
    color: "#3C4858",
    display: "inline-block",
    position: "relative",
    fontWeight: "300",
    color: "#FFFFFF",
    fontFamily: `"Times New Roman", serif`
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",

  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    //background: "#166A4D",
    background: "#EEF1F0",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  mainRaised_step2: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    //background: "#166A4D",
    background: "#D3E0DB",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  mainRaised_step3: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    //background: "#166A4D",
    //background: "#3D6F5A",
    background: "#487C67",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default landingPageStyle;
