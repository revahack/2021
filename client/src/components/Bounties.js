import React from "react";
import "../css/Bounties.css";
import polygon from "../images/sponsors/sponsors 2021/Polygon_Logo-White.png";
import tezos from "../images/sponsors/sponsors 2021/Tezos_Logo-Colored@2x.png";
import celo from "../images/sponsors/sponsors 2021/Celo Logo Color Reverse@2x.png";
import filecoin from "../images/sponsors/sponsors 2021/Filecoin Coloured White Text-1.png";

function Bounties() {
  return (
    <div className="bounties">
      <h1 className="title">Track Prizes</h1>
      <div className="Bdiv">
        <div className="copy-box two">
          <div className="inner">
            <img
              src={polygon}
              className="center"
              style={{ width: "100%", paddingLeft: "16px" }}
              alt="altimage"
            />

            <div className="line right">
              <div className="scanner"></div>
            </div>
            <br />
            <h2>15,000</h2>
            <br />
            <h6 style={{ fontSize: "1.4rem" }}>
              For teams that integrate Polygon in their hacks as well the prize
              money will be higher (Rs.15000) along with eligibility for
              internship/full-time role interviews and a chance to land seed
              funding of upto 5000 USD!"
            </h6>
            <br />
            <br />
            <a
              href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c"
              className="buttonz"
            >
              Learn More
            </a>

            <br />
          </div>
        </div>
      </div>
      <div className="Bdiv">
        <div className="copy-box two">
          <div className="inner">
            <img
              src={tezos}
              className="center"
              style={{ width: "100%", paddingLeft: "16px" }}
              alt="altimage"
            />

            <div className="line right">
              <div className="scanner"></div>
            </div>
            <br />

            <h2>20,000</h2>
            <br />
            <h6 style={{ fontSize: "1.4rem" }}>
              20000 INR for best Dapp built on Tezos - Continuity grant
              opportunity up to 5,000 USD for an outstanding project
            </h6>
            <br />

            <br />
            <br />

            <br />
            <br />
            <a
              href="https://www.notion.so/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff"
              className="buttonz"
            >
              Learn More
            </a>

            <br />
          </div>
        </div>
      </div>
      <div className="Bdiv">
        <div className="copy-box two">
          <div className="inner">
            <img
              src={celo}
              className="center"
              style={{ width: "100%", paddingLeft: "16px" }}
              alt="altimage"
            />
            <div className="line right">
              <div className="scanner"></div>
            </div>
            <br />
            <h2>20,000</h2>

            <br />
            <h6 style={{ fontSize: "1.4rem" }}>
              20000 INR for best Dapp built on Celo
            </h6>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a
              href="https://www.notion.so/Celo-Devfolio-Hackathon-Season-Prize-8b98dac17f134abeae863d5d98c01ff0"
              className="buttonz"
            >
              Learn More
            </a>
            <br />
          </div>
        </div>
      </div>
      <div className="Bdiv">
        <div className="copy-box two">
          <div className="inner">
            <img
              src={filecoin}
              className="center"
              style={{ width: "100%", paddingLeft: "16px" }}
              alt="altimage"
            />
            <div className="line right">
              <div className="scanner"></div>
            </div>
            <h2>20,000</h2>

            <br />
            <h6 style={{ fontSize: "1.4rem" }}>
              20000 INR for best use of IPFS and/or Filecoin
            </h6>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a
              href="https://devfolio.notion.site/Filecoin-Devfolio-Hackathon-Season-Prize-998fc3fe477e474086ae1d5ed1685203"
              className="buttonz"
            >
              Learn More
            </a>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bounties;
