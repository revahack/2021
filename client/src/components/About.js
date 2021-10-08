import React, { Component } from "react";
import "../css/About.css";
//import slideImage from "../images/Final-01.png";

class About extends Component {
  render() {
    /*
    const showslide1 = () =>{
      document.getElementById("slide1").style.display="block";
      document.getElementById("slide2").style.display="none";
      document.getElementById("slide3").style.display="none";
    }

    const showslide2 = () =>{
      document.getElementById("slide2").style.display="block";
      document.getElementById("slide1").style.display="none";
      document.getElementById("slide3").style.display="none";
    }

    const showslide3 = () =>{
      document.getElementById("slide3").style.display="block";
      document.getElementById("slide1").style.display="none";
      document.getElementById("slide2").style.display="none";
    }

              <div className="column large10 medium10 small12 center">
            <button className="left icon circular" onClick={showslide3}>
              <i className="ms-Icon ms-Icon--Back slideicon"></i>
            </button>
            <button className="right icon circular" onClick={showslide2}>
              <i className="ms-Icon ms-Icon--Forward slideicon"></i>
            </button>
          </div>

    */

    return (
      <section className="aboutbg">
        <div className="column large10 medium12 small12 center">
          <div className="column large8 medium10 small0">
            <h1 className="title ta_center">REVA HACK &lt;/&gt; 2021</h1>
            <br />
            <h6 style={{ lineHeight: "1.25" }} className="ta_justify">
              REVA HACK  2021 is an online hackathon for coding enthusiasts
              organised by a student community with the goal of encouraging and
              providing a forum for students to display their abilities and
              skills using cutting-edge technology. We're hosting the hackathon
              virtually due to the Covid 19 outbreak.
            </h6>
          </div>
          <div
            className="column large8 medium10 small12"
            style={{ marginTop: "2rem" }}
          >
            <h1 className="title ta_center">Why REVA HACK &lt;/&gt; 2021?</h1>
            <br />
            <h6 style={{ lineHeight: "1.25" }} className="ta_justify">
              REVA HACK &lt;/&gt; provides a place for you to test your coding
              and programming abilities. Participants may participate in an
              exciting contests, acquire new skills, meet new people, and have a
              great time. There will be a variety of interesting events with
              fantastic prizes. This is really a wonderful chance to highlight
              your skills while also winning certifications, prizes, and more.
            </h6>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
