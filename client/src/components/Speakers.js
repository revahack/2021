import React from "react";

import "../css/Speakers.scss";
import Anjali from "../images/speakers/anjali.jpg";
import Suraj from "../images/speakers/suraj.png";
import Bharath from "../images/speakers/bharath.jpg";
import Praharshit from "../images/speakers/praharshit.jpg";
import Amya from "../images/speakers/amya.jpg";
import Kushal from "../images/speakers/kushal.jpg";
import Nitin from "../images/speakers/nitin.jpg";
import linkedin from "../images/speakers/linkedin.png";

function Speakers() {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Speakers</h1>
        <br />
      </div>
      <div className="main">
        <figure class="image-block">
          <img src={Anjali} alt="" />
          <figcaption>
            <h4>Anjali viramgama</h4>
            <p>
              <b>Software Engineer at Microsoft </b>
            </p>
            <a
              href="https://www.linkedin.com/in/anjali-viramgama/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                style={{ height: "25px", width: "25px" }}
                alt=""
              />
            </a>
          </figcaption>
        </figure>

        <figure class="image-block">
          <img src={Suraj} alt="" />
          <figcaption>
            <h4> Suraj wodeyar</h4>
            <p>
              <b>Founder and CEO of Drona Automations</b>
            </p>
            <a
              href="https://www.linkedin.com/in/suraj-wodeyar-1796a4114/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                style={{ height: "25px", width: "25px" }}
                alt=""
              />
            </a>
          </figcaption>
        </figure>

        <figure class="image-block">
          <img src={Amya} alt="" />
          <figcaption>
            <h4>Amya madan</h4>
            <p>
              <b>Founder, Écrivons-You write, We discover</b>
            </p>
            <a
              href="https://www.linkedin.com/in/amya-madan-0912am1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                style={{ height: "25px", width: "25px" }}
                alt=""
              />
            </a>
          </figcaption>
        </figure>
      </div>

      <div className="main block">
        <figure class="image-block">
          <img src={Nitin} alt="" />
          <figcaption>
            <h4>Nitin Prakash</h4>
            <p>
              <b>Senior Software Engineer at Byju's</b>
            </p>
            <a
              href="https://www.linkedin.com/in/nitin-prakash9911"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                style={{ height: "25px", width: "25px" }}
                alt=""
              />
            </a>
          </figcaption>
        </figure>

        <figure class="image-block">
          <img src={Bharath} alt="" />
          <figcaption>
            <h4>Bharath jairam</h4>
            <p>
              <b>Founder and director at IOTREE MINDS LLP</b>
            </p>
            <a
              href="https://www.linkedin.com/in/bharath-jairam-509407172/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                style={{ height: "25px", width: "25px" }}
                alt=""
              />
            </a>
          </figcaption>
        </figure>

        <figure class="image-block">
          <img src={Kushal} alt="" />
          <figcaption style={{ opacity: "0.8" }}>
            <h4>Kushal Vijay</h4>
            <p>
              <b>Software Engineer at Microsoft</b>
            </p>
            <a
              href="https://www.linkedin.com/in/kushalvijay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                style={{ height: "25px", width: "25px" }}
                alt=""
              />
            </a>
          </figcaption>
        </figure>
      </div>

      <div className="main block">
        <figure class="image-block">
          <img src={Praharshit} alt="" />
          <figcaption>
            <h4>Praharshit Sharma </h4>
            <p>
              <b>Bioinformatics Specialist with NCDC, GOI</b>
            </p>
            <a
              href="https://www.linkedin.com/in/bioinformaticsharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                style={{ height: "25px", width: "25px" }}
                alt=""
              />
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Speakers;
