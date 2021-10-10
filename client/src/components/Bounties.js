import React from "react";
import "../css/Bounties.css";
import matic from "../images/bounties/bT2.svg";
import portis from "../images/bounties/bT1.svg";
import tezos from "../images/bounties/tezos.png";

function Bounties() {
  return (
    <div className="bounties btglass">
      <h1 className="title">Bounties</h1>
      <div className="Bdiv">
        <div className="copy-box two">
          <h3>Bounty#1</h3>
          <div className="inner">
            <div className="line right">
              <div className="scanner"></div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h5>Revealed soon</h5>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="Bdiv">
        <div className="copy-box two">
          <h3>Bounty#2</h3>
          <div className="inner">
            <div className="line right">
              <div className="scanner"></div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h5>Revealed soon</h5>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="Bdiv">
        <div className="copy-box two">
          <h3>Bounty#3</h3>
          <div className="inner">
            <div className="line right">
              <div className="scanner"></div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h5>Revealed soon</h5>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bounties;
