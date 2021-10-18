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
        <div className="column large10 medium12 small12 center aboutglass">
          {/* <div className="mygrid"> */}
          {/* <div className="justrandom"> */}
          <div className="column large8 medium10 small12">
            <h1 className="title ta_center abTitle">
              What is REVA HACK &lt;/&gt; 2021?
            </h1>
            <br />
            <h6 style={{ lineHeight: "1.25" }} className="ta_justify">
              REVA HACK &lt;/&gt; 2021 is a student community-based online
              hackathon for coding enthusiasts, aiming to encourage and provide
              a platform for students to showcase their talents and skills with
              the help of latest technologies. In the light of covid 19
              pandemic, we're hosting the hackathon virtually.
            </h6>
          </div>
          <div
            className="column large8 medium10 small12"
            style={{ marginTop: "2rem" }}
          >
            <h1 className="title ta_center abTitle">Why REVA HACK &lt;/&gt; 2021?</h1>
            <br />
            <h6 style={{ lineHeight: "1.25" }} className="ta_justify">
              REVA HACK provides the platform to explore your skills in coding
              and programming. Participants can get into an inspiring
              competition, learn new things, make new friends and have an
              amazing time. There will be numerous exciting events with amazing
              goodies. A perfect opportunity to showcase your talent and win
              certificates, goodies and lot more.
            </h6>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </section>
    );
  }
}

export default About;
