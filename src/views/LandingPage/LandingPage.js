import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="爱乐人合唱团主页"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 600,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/my_landing_1.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>爱乐人室内合唱团</h1>
              <h2 className={classes.subtitle}>Tianjin Philharmonic Chamber Choir</h2>

              <h4 className={classes.description_chn}>
                成立于2015年，一个非营利性、社群性、公益性与艺术性有机结合的社会群体
              </h4>
              <h4 className={classes.description_eng}>
                Founded in 2015，a non-profit, community-based, mix-voice choir
                that focuses on both musicianship developement and social activeness
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <div className={classes.container}></div>
      <div className={classNames(classes.main, classes.mainRaised_step2)}>
        <div className={classes.container}>
          <TeamSection />
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised_step3)}>
        <div className={classes.container}>
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
