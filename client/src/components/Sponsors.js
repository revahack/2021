import React, { Component } from "react";
import "../Sponsors.css";
import devfolio from "../images/sponsors/devfolio.png";
import revaLogo from "../images/sponsors/revaLogo.png";
import tezos from "../images/sponsors/sponsors 2021/Tezos_Logo-Colored@2x.png";
import cello from "../images/sponsors/sponsors 2021/Celo Logo Color Reverse@2x.png";
import polygon from "../images/sponsors/sponsors 2021/Polygon_Logo-White@2x.png";
import filecoin from "../images/sponsors/sponsors 2021/Filecoin Coloured White Text-1.png";
import GMC from "../images/sponsors/sponsors 2021/GMC.png";
import Egg from "../images/sponsors/sponsors 2021/egghead_logo.png";
import taskade from "../images/sponsors/sponsors 2021/tasklogo.png";
import HCflag from "../images/sponsors/sponsors 2021/flag-standalone.png";
import XYZ from "../images/sponsors/sponsors 2021/xyz-logo-color.png";
import axure from "../images/sponsors/sponsors 2021/axurelogo.png";
import RM from "../images/sponsors/sponsors 2021/RM-Logo.png";
// -----------
import SY from "../images/sponsors/sponsors 2021/SY.png";
import Iotree from "../images/sponsors/sponsors 2021/Iotree.png";
// ---------new sponsors----------
// import P1 from "../images/sponsors/sponsors 2021/1P-logo.png";
// import balsamiq from "../images/sponsors/sponsors 2021/balsamiq.png";
// import cyb from "../images/sponsors/sponsors 2021/cybrancee.png";
// import heiphen from "../images/sponsors/sponsors 2021/heiphen.png";

import hackcbs from "../images/sponsors/sponsors 2021/hackcbs.png";








class Sponsors extends Component {
  render() {
    return (
      <div className="sponsors">
        <div className="" style={{ padding: "0px 10px" }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className="ta_center title">Sponsors</h1>
          <br />

          <br />
          <div className="column large10 medium12 small12 Tree">
            <h4 className="ta_center ">Tree</h4>
            <br />
            <br />
            <div className="column large3 medium4 small5">
              <a href="https://reva.edu.in/" target="blank">
                <img
                  src={revaLogo}
                  className="center"
                  style={{ width: "130%" }}
                  alt="altimage"
                />
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="column large3 medium4 small5">
              <a href="https://devfolio.co/" target="blank">
                <img
                  src={devfolio}
                  className="center"
                  style={{ width: "100%" }}
                  alt="altimage"
                />
              </a>
            </div>
          </div>

          <div className="page_container Sapling">
            <h4 className="ta_center">Sapling</h4>
            <br />
            <div className="column large2 medium4 small6">
              <a href="https://egghead.io/" target="blank">
                <img
                  src={Egg}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>
            <div className="column large2 medium4 small6">
              <a href="https://taskade.com/" target="blank">
                <img
                  src={taskade}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>
            <div className="column large2 medium4 small6">
              <a href="https://polygon.technology/" target="blank">
                <img
                  src={polygon}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>
            <div className="column large2 medium4 small6">
              <a href="https://hackclub.com/" target="blank">
                <img
                  src={HCflag}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>
            <div className="column large2 medium4 small6">
              <a href="https://gen.xyz/" target="blank">
                <img
                  src={XYZ}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>
            <div className="column large2 medium4 small6">
              <a href="https://www.axure.com" target="blank">
                <img
                  src={axure}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>
            <div className="column large2 medium4 small6">
              <a href="https://tezos.com" target="blank">
                <img
                  src={tezos}
                  className="center"
                  style={{ width: "90%" }}
                  alt="altimage"
                />
              </a>
            </div>
            <div className="column large2 medium4 small6">
              <a href="https://celo.org" target="blank">
                <img
                  src={cello}
                  className="center"
                  style={{ width: "90%" }}
                  alt="altimage"
                />
              </a>
            </div>
            <div className="column large2 medium4 small6">
              <a href="https://rosenfeldmedia.com/" target="blank">
                <img
                  src={RM}
                  className="center"
                  style={{ width: "90%" }}
                  alt="altimage"
                />
              </a>
            </div>
            <div className="column large2 medium4 small6 tezos-img">
              <a href="https://filecoin.io/" target="blank">
                <img
                  src={filecoin}
                  className="center"
                  style={{ width: "90%" }}
                  alt="altimage"
                />
              </a>
            </div>
          </div>
          
          <div className="page_container">
            <h4 className="ta_center">Shoot</h4>
            <br />
            <div className="column large2 medium4 small6">
              <a href="https://www.givemycertificate.com/" target="blank">
                <img
                  src={GMC}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>
            <div className="column large2 medium4 small6">
              <a href="https://www.stickeryou.com/" target="blank">
                <img
                  src={SY}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>
            <div className="column large2 medium4 small6">
              
                <img
                  src={Iotree}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              
              <br />
              <br />
            </div>

          
        
          </div>
          <div className="page_container Sapling">
            <h4 className="ta_center">Community Sponsor</h4>
            <br />
            <div className="column large2 medium4 small6">
              <a href="https://hackcbs.tech/" target="blank">
                <img
                  src={hackcbs}
                  className="center"
                  style={{ width: "100%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>
            
            </div>
        </div>
      </div>
      /*
                  <div className="column large10 medium12 small12">
                <h2 className="ta_center">Silver</h2><br />
                <div className="column large3 medium3 small3">
                    <img src={fold} className="center" style={{width: "54%"}} alt="altimage" />
                </div>
                <div className="column large3 medium3 small3">
                    <img src={matic} className="center" style={{width: "90%"}} alt="altimage" />
                </div>
                <div className="column large3 medium3 small3">
                    <img src={matic} className="center" style={{width: "90%"}} alt="altimage" />
                </div>
                <div className="column large3 medium3 small3">
                    <img src={fold} className="center" style={{width: "54%"}} alt="altimage" />
                </div>
              </div><br /><br /><br /><br />

              <br /><br /><br /><br /><br /><br />

                      */
    );
  }
}

export default Sponsors;
