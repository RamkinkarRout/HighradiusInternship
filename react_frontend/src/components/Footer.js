import { Container } from "@mui/material";
import React, { Fragment } from "react";
import "./footer.css";

const Footer = () => {
  return (
    <Fragment>
      <Container maxWidth='xxl'>
        <div className='footerContainer'>
          <span className='footerSpan'>
            <a href='https://www.instagram.com/iamramkinkarrout/'>
              Privacy Policy
            </a>
            | ©️ 2020 Highradius Corporation. All rights
            reserved.
          </span>
        </div>
      </Container>
    </Fragment>
  );
};

export default Footer;
