import React from "react";
import "../css/Bounties.css";
import polygon from "../images/sponsors/sponsors 2021/Polygon_Logo-Colored.png";
import tezos from "../images/sponsors/sponsors 2021/Tezos_Logo-Colored@2x.png";
import celo from "../images/sponsors/sponsors 2021/Celo Logo Color Reverse@2x.png";
import filecoin from "../images/sponsors/sponsors 2021/Filecoin Coloured White Text-1.png";

function Bounties() {
  return (
    <div className="bounties">
     
      <h1 className="title">Bounties</h1>
      <div className="Bdiv">
        <div className="copy-box two">
          <h3></h3>
          <div className="inner">
          
          <img
                  src={polygon}
                  className="center"
                  style={{ width: "100%",paddingLeft:"16px" }}
                  alt="altimage"
                />
                
            <div className="line right">
              <div className="scanner"></div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h1>15,000</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="Bdiv">
        <div className="copy-box two">
          <h3></h3>
          <div className="inner">
       
          <img
                  src={tezos}
                  className="center"
                  style={{ width: "100%",paddingLeft:"16px" }}
                  alt="altimage"
                />
                
            <div className="line right">
              <div className="scanner"></div>
             
            </div>
            <br />
            <br />
            <br />
            <br />
            <h1>20,000</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="Bdiv">
        <div className="copy-box two">
          <h3></h3>
          <div className="inner">
          <img
                  src={celo}
                  className="center"
                  style={{ width: "100%",paddingLeft:"16px" }}
                  alt="altimage"
                />
            <div className="line right">
           
              <div className="scanner"></div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h1>20,000</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="Bdiv">
        <div className="copy-box two">
          <h3></h3>
          <div className="inner">
          <img
                  src={filecoin}
                  className="center"
                  style={{ width: "100%",paddingLeft:"16px" }}
                  alt="altimage"
                />
            <div className="line right">
              <div className="scanner"></div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h1>20,000</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>

   
  );
}

export default Bounties;