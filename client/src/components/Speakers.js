import React from "react";
import comingSoon from "../images/coming-soon.png";
import "../css/Speakers.css";
import Kunal_Kushwaha from "../images/speakers/Kunal_Kushwaha.jpg";
import Punit_Chawla from "../images/speakers/Punit_Chawla.jpg";
import Akash_James from "../images/speakers/Akash_James.jpeg";
import Ahmed_aqib from "../images/speakers/Ahmed_aqib.jpg";


function Speakers() {
  return (
    <div className="speakers">

      <div className="">
          <br /><br /><br /><br /><br /><br />
          <h1 className="ta_center title">Speakers</h1>
          <br /><br />
            <div className="">
              <div className="column large4 medium6 small6">
                  <img src={Ahmed_aqib}   alt="altimage" />
                  <br />
                  <p>Ahmed Aqib</p>
              </div>
              <div className="column large4 medium6 small6">
                <img src={Akash_James}   alt="altimage" />
                  <br />
                  <p>Akash James</p>
                </div>
            </div>
            <br /><br />
          <div className="">
              <div className="column large4 medium6 small6">
                  <img src={Kunal_Kushwaha}   alt="altimage" />
                  <br />
                  <p>Kunal Kushwaha</p>
              </div>
              <div className="column large4 medium6 small6">
                  <img src={Punit_Chawla}   alt="altimage" />
                  <br />
                    <p>Punit Chawla</p>
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
