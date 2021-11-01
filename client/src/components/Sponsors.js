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
import p1 from "../images/sponsors/sponsors 2021/1P-logo.png";
import balsamiq from "../images/sponsors/sponsors 2021/balsamiq.png";
import cyb from "../images/sponsors/sponsors 2021/cybrancee.png";
import heiphen from "../images/sponsors/sponsors 2021/heiphen.png";
import mentor from "../images/sponsors/sponsors 2021/mentor.png";
import robotix from "../images/sponsors/sponsors 2021/robotix.png";
import evo from "../images/sponsors/sponsors 2021/evo.jpg";

import hackcbs from "../images/sponsors/sponsors 2021/hackcbs.png";
import foss from "../images/sponsors/sponsors 2021/foss.jpeg";

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
            <div className="column large3 medium4 small5">
              <a href="https://cybrancee.com/" target="blank">
                <img
                  src={cyb}
                  className="center"
                  style={{ width: "100%", paddingLeft: "16px" }}
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

            <div className="column large2 medium4 small6 tezos-img">
              <a href="https://balsamiq.com/" target="blank">
                <img
                  src={balsamiq}
                  className="center"
                  style={{ width: "90%" }}
                  alt="altimage"
                />
              </a>
            </div>
            <div className="column large2 medium4 small6 tezos-img">
              <a href="https://heiphen.com" target="blank">
                <img
                  src={heiphen}
                  className="center"
                  style={{ width: "70%" }}
                  alt="altimage"
                />
              </a>
            </div>
            <div className="column large2 medium4 small6 tezos-img">
              <a href="https://1password.com/" target="blank">
                <img
                  src={p1}
                  className="center"
                  style={{ width: "70%" }}
                  alt="altimage"
                />
              </a>
            </div>
            <div className="column large2 medium4 small6">
              <a href="https://thementorx.com/" target="blank">
                <img
                  src={mentor}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>

            <div className="column large2 medium4 small6">
              <a href="https://hoverrobotix.com/" target="blank">
                <img
                  src={robotix}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>

            <div className="column large2 medium4 small6">
              <a href="https://www.ecrivonsgraphology.com/" target="blank">
                <img
                  src={evo}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
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
              <a href="https://iotreeminds.com/" target="blank">
                <img
                  src={Iotree}
                  className="center"
                  style={{ width: "80%", paddingTop: "10px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div>
          </div>
          <div className="page_container Sapling">
            <h4 className="ta_center">Community Sponsor</h4>
            <br />
            {/* <div className="column large2 medium4 small6">
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
            <div className="column large2 medium4 small6">
              <a href="https://fossunited.org/fosshack/" target="blank">
                <img
                  src={foss}
                  className="center"
                  style={{ width: "100%", padding: "16px" }}
                  alt="altimage"
                />
              </a>
              <br />
              <br />
            </div> */}
            <div class="container">
              <div class="card">
                <div>
                  <img src={hackcbs} alt="TrackCover" />
                </div>
                
                </div>
                <div >
                <div style={{marginTop:"40%",alignContent:"center"} }>
                  <p>hackCBS 4.0, LEARN. TEACH. HACK. WIN </p>
                  <p> Happening on 29th-31 oct 2021.</p>
                  <br />
                  <p>
                    INDIA'S LARGEST STUDENT-RUN HACKATHON. PRIZES WORTH $50,000!
                  </p>
                  <p>Registration open at www.hackcbs.tech</p>
                  <br /><br/>
                  <pre>48 HOURS HACKATHON!</pre>
                
                  <pre>INTERACTIVE WORKSHOPS!</pre>
                  
                  <pre>SWAGS FOR ALL!     NETWORKING!</pre>
                </div>
              </div>
              </div>
              <br/>
              <div class="container">
              <div class="card">
                <div>
                  <img src={foss} alt="TrackCover" />
                </div>
                
                </div>
                <div >
                <div style={{marginTop:"15%",alignContent:"center"}}>
                  <p>
                    Announcing FOSS Hack 2021, second edition of FOSS Hack.</p>
                   <p> Happening on 13th-14th Nov.
                  </p>
                  <br/>
                  <p>
                    Join India's Biggest FOSS Hackathon and win up to ₹10 Lakh.
                  </p>
                  <p>Registration open at fossunited.org/fosshack</p>
                  <br/>
                  <p>@FOSSUnited</p>
                  <br/>
                  <p>#FOSSHack2021 #FOSSUnited</p>
                </div>
              </div>
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
