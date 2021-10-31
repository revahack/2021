import React, { Component } from "react";
import "../css/Schedule.css";

class Schedule extends Component {
  render() {
    return (
      <div className="schedule top-top schedulebg ">
        <br />
        <br />
        <br />
        <br />
        <h1 className="title ta_center">Process Flow</h1>
        <br />
        <br />
        <br />
        <br />
        <div id="circle1">
          <div className="ddr">
            <div className="pclass">00:00 HOURS 11/10/2021</div>
            APPLICATION OPENS
          </div>
        </div>
        <hr className="hrv" />
        <div id="circle2">
          <div className="ddl">
            <div className="pclass">10:00 HOURS 8/11/2021</div>
            SPEAKER SESSION
          </div>
        </div>
        <hr className="hrv" />
        <div id="circle3">
          <div className="ddr">
            <div className="pclass">12:00 HOURS 10/11/2021</div>
            HACKATHON STARTS
          </div>
        </div>
        <hr className="hrv" />
        <div id="circle4">
          <div className="ddl">
            <div className="pclass">12:00 HOURS 13/11/2021</div>
            HACKATHON ENDS
          </div>
        </div>
        <hr className="hrv" />
        <div id="circle5">
          <div className="ddr">
            <div className="pclass">15:30 HOURS 20/11/2021</div>
            RESULTS ANNOUNCED
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Schedule;
