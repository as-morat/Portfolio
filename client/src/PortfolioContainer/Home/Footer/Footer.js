import React, { PureComponent } from "react";
import "./Footer.css";
import ShapeBG from "/home/rafat/Documents/Protfolio/client/src/assets/Home/shape-bg.svg"; // import svg file

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-parent">
          <div className="footer-curve">
            <img src={ShapeBG} alt="footer-shape" className="footer-svg" />
          </div>
        </div>
      </div>
    );
  }
}

