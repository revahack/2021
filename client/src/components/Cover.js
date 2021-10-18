import React, { useState, useEffect } from "react";
import "../css/Cover.css";
import discord from "../images/discord.svg";
import Typewriter from "typewriter-effect";

function Cover(props) {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // const [mode, setMode] = useState("dark");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.outerWidth <= 768) setIsMobile(true);
  }, [isMobile]);

  return (
    <div className="cover">
      <div className="cover-container">
        <h1 className="reva-h1">REVA</h1>
        <br />
        <h1 className="hack-h1"> H A C K </h1>
        <br />

        <h3 className="typewriter-text">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter

                .typeString("Fueled By Innovation.")
                .pauseFor(2500)
                .deleteAll()

                .typeString("The Hack Is Back.")
                .pauseFor(2500)
                .deleteAll()

                .typeString("Think, Code, Innovate.")
                .pauseFor(2500)
                .start();
            }}
          />
        </h3>
        <br />
        <p>10-13 November 2021</p>
        <br />

        {/* <img src={DSC} className="associate def" alt="DSC" /> */}

        <div className="column large6 small12 btcl">
          <div
            className="apply-button"
            data-hackathon-slug={"revahack21"}
            data-button-theme={"dark-inverted"}
            style={{ height: "44px", width: "312px" }}
          ></div>
        </div>
        <div className="column large6 disB small12">
          <a
            href="https://discord.gg/xBBJgXp"
            target="blank"
            className="discord"
          >
            <span>Join Us On</span>

            <img src={discord} alt="discord" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cover;
