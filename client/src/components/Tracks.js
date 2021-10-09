import React from "react";
import "../css/Tracks.css";
import ai1 from "../images/tracks/ai1.jpg";
import cloud1 from "../images/tracks/cloud1.jpg";
import health1 from "../images/tracks/health1.jpg";
import iot1 from "../images/tracks/iot1.jpg";
import ml1 from "../images/tracks/ml1.jpg";
import vr1 from "../images/tracks/vr1.jpg";

export default function Tracks() {
  return (
    // <div className="tracks">
    //   <h1>Tracks</h1>
    //   <br />

    //   <div className="trackimg">
    //     <img src={health} alt="" />
    //     <div class="face face2">
    //       <div class="content">
    //         <p class="ct">Something about</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="trackimg">
    //     <img src={vr} alt="" />
    //   </div>

    //   <div className="trackimg">
    //     <img src={cloud} alt="" />
    //   </div>

    //   <br />
    //   <div className="trackimg">
    //     <img src={iot} alt="" />
    //   </div>

    //   <div className="trackimg">
    //     <img src={ml} alt="" />
    //   </div>

    //   <div className="trackimg">
    //     <img src={ai} alt="" />
    //   </div>
    // </div>
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        Tracks
      </h1>

      <div class="container">
        <div class="card">
          <div class="Box">
            <img src={ai1} />
          </div>
          <div class="details">
            <h3>Artificial Intelligence</h3>
            <br />
            <p>Let our AI handle it</p>
          </div>
        </div>
        <div class="card">
          <div class="Box">
            <img src={vr1} />
          </div>
          <div class="details">
            <h3>Virtual Reality</h3>
            <br />
            <p>3-D is just the beginning</p>
          </div>
        </div>
        <div class="card">
          <div class="Box">
            <img src={cloud1} />
          </div>
          <div class="details">
            <h3>Cloud</h3>
            <h3>Computing</h3>
            <br />
            <p>See you on the cloud</p>
          </div>
        </div>
        <br />
        <div class="card">
          <div class="Box">
            <img src={iot1} />
          </div>
          <div class="details">
            <h3>Internet Of Things</h3>
            <br />
            <br />
            <p>A home for things</p>
          </div>
        </div>
        <div class="card">
          <div class="Box">
            <img src={ml1} />
          </div>
          <div class="details">
            <h3>Machine Learning</h3>
            <p>The next Internet</p>
          </div>
        </div>
        <div class="card">
          <div class="Box">
            <img src={health1} />
          </div>
          <div class="details">
            <h2>Healthcare</h2>
            <p>For the health of it</p>
          </div>
        </div>
      </div>
    </div>
  );
}
