import React, { Component } from "react";
import "../css/Prizes.css";

class Prizes extends Component {
  render() {
    return (
      <div className="prizes" style={{ backgroundcolor: "#010409" }}>
        <div
          className=""
          style={{ padding: "0px 10px", backgroundcolor: "#010409" }}
        >
          <br />
          <br />
          <br />
          <br />
          <h1 className="ta_center title make-it-small">Total Prize Pool of</h1>
          <h1 className="ta_center title highlight make-it-small">
            INR 32,00,000
          </h1>

          <br />
          <br />
          <br />
          <br />
          <h1 className="ta_center title make-it-small">
            Prizes and Incentives
          </h1>
          <br />
          <br />
          <br />
          <br />
          <div className="column large6 medium6 small12">
            <h3 className="ta_center">1st Prize</h3>
            <h1 className="ta_center">INR 20,000</h1>
            <h3 className="ta_center">+</h3>
            <h3 className="ta_center make-it-extra-small med-text">
              Clerky Lifetime Package worth $799
            </h3>
            <h3 className="ta_center">+</h3>
            <h3 className="ta_center make-it-extra-small med-text">
              Goodies,Swags and a Whole Lot More,
            </h3>
            <h3 className="ta_center make-it-extra-small med-text">
              From Our Lovely Sponsers.
            </h3>
            <br />
            <br />
            <hr className="large8 medium8 small10" />
            <br />
            <br />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div
            className="column large6 medium6 small12"
            style={{ borderRight: "1px solid #fcfcfc" }}
          >
            <br />
            <br />
            <h6 className="ta_center">2nd Prize</h6>
            <h3 className="ta_center">INR 15,000</h3>
            <br />
            <br />
          </div>
          <div className="column large6 medium6 small12">
            <br />
            <br />
            <h6 className="ta_center">3rd Prize</h6>
            <h3 className="ta_center">INR 5000</h3>
            <br />
            <br />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Prizes;
