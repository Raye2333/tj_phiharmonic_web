import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>社会活动</h2>
          <h4 className={classes.description}>
            不管是社会活动还是啥反正这得有一段
            <br />
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
        </GridItem>
      </GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <h5 className={classes.description}>
          <br />
        </h5></GridItem>
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
    </div>
  );
}
