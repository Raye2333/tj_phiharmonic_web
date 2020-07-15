import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const styles = {
  ...imagesStyles,
  ...productStyle
};
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>关于我们</h2>
          <h5 className={classes.description}>
            此处需要简介
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <img
                style={{ height: "100%", width: "100%", display: "block" }}
                className={classes.imgFluid}
                src={require("assets/img/placeholder2.jpg")}
                alt="Card-img-cap"
              />
            </div>
            <div><br /></div>
            <div>
              <h5 className={classes.description}>
                此处需要简介<br />
                此处需要简介<br />
                此处需要简介
              </h5>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <img
                style={{ height: "100%", width: "100%", display: "block" }}
                className={classes.imgFluid}
                src={require("assets/img/placeholder2.jpg")}
                alt="Card-img-cap"
              />
            </div>
            <div><br /></div>
            <div>
              <h5 className={classes.description}>
                此处需要简介<br />
                此处需要简介<br />
                此处需要简介
              </h5>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <img
                style={{ height: "100%", width: "100%", display: "block" }}
                className={classes.imgFluid}
                src={require("assets/img/placeholder2.jpg")}
                alt="Card-img-cap"
              />
            </div>
            <div><br /></div>
            <div>
              <h5 className={classes.description}>
                此处需要简介<br />
                此处需要简介<br />
                此处需要简介
              </h5>
            </div>
          </GridItem>
        </GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <h5 className={classes.description}>
            <br />
          </h5>
        </GridItem>
      </div>
    </div>
  );
}
