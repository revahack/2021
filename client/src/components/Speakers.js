import React from "react";
import "../css/Speakers.css";
import Punit_Chawla from "../images/speakers/Punit_Chawla.jpg";
import Ahmed_aqib from "../images/speakers/Ahmed_aqib.jpg";
import Akash_James from "../images/speakers/Akash_James.jpeg";
import Kunal_Kushwaha from "../images/speakers/Kunal_Kushwaha.jpg";
import SMR from "../images/speakers/Singam_Mohit_Reddy.png";
import AG from "../images/speakers/Alon_Grinshpoon.png";
import EP from "../images/speakers/Emily_Perry.jpg";
import SREE from "../images/speakers/shreevallabha.jpg";


function Speakers() {
  return (
    <div className="speakers">

      <div className="page_container">
          <br /><br />
          <h1 className="ta_center title">Speakers</h1>
          <br /><br />

          <div className="column large10 medium12 small12 center spk">

            <div className="column large4 medium8 small12">
              <img className="column large12 medium12 small12" src={Punit_Chawla} />
              <h2 className="primary_white nametag">Punit Chawla</h2>
            </div>

            <div className="column large4 medium8 small12">
              <img className="column large12 medium12 small12" src={AG} />
              <h2 className="primary_white nametag">Alon Grinshpoon</h2>
            </div>

            <div className="column large4 medium8 small12">
              <img className="column large12 medium12 small12" src={Ahmed_aqib} />
              <h2 className="primary_white nametag">Aqib Ahmed</h2>
            </div>

        </div>

        <div className="column large10 medium12 small12 center spk">

          <div className="column large4 medium8 small12">
            <img className="column large12 medium12 small12" src={Akash_James} />
            <h2 className="primary_white nametag">Akash James</h2>
          </div>

          <div className="column large4 medium8 small12">
            <img className="column large12 medium12 small12" src={SMR} />
            <h3 className="primary_white nametag">Singam Mohit Reddy</h3>
          </div>

          <div className="column large4 medium8 small12">
            <img className="column large12 medium12 small12" src={Kunal_Kushwaha} />
            <h2 className="primary_white nametag">Kunal Kushwaha</h2>
          </div>

        </div>

        <div className="column large10 medium12 small12 center spk">

          <div className="column large4 medium8 small12">
            <img className="column large12 medium12 small12" src={EP} />
            <h2 className="primary_white nametag">Emily Perry</h2>
          </div>

          <div className="column large4 medium8 small12">
            <img className="column large12 medium12 small12" src={SREE} />
            <h2 className="primary_white nametag">Sreevallabha</h2>
          </div>

        </div>

      </div>

    <br/>
    <br/>
    <br/>
    <br/>
  </div>);
}

export default Speakers;
