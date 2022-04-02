import React, { Fragment } from "react";
import "./App.css";
import abc from "../images/abc.png";
import logo from "../images/logo.svg";

export const Header = () => {
  return (
    <Fragment>
      <div className='headerContainer'>
        <div className='headerItem'>
          <img src={abc} alt='abc' />
        </div>
        <div className='headerItem'>
          <img src={logo} alt='Highradius logo' />
        </div>
        <div className='headerItem'></div>
      </div>
    </Fragment>
  );
};
