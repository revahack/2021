import React from "react";
import { Carousel } from "react-carousel-minimal";
import crew1 from "../images/crew1.png";
import crew2 from "../images/crew2.png";
import crew3 from "../images/crew3.png";
import crew4 from "../images/crew4.png";
import crew5 from "../images/crew5.png";
import crew6 from "../images/crew6.png";
import crew7 from "../images/crew7.png";
import crew8 from "../images/crew8.png";

export default function CarouselDiv() {
  const data = [
    {
      image: crew1,
    },
    {
      image: crew2,
    },
    {
      image: crew3,
    },
    {
      image: crew4,
    },
    {
      image: crew5,
    },
    {
      image: crew6,
    },
    {
      image: crew7,
    },
    {
      image: crew8,
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <br />
      <div style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center" }}>The Crew</h2>

        {/* <p>
          There is a Crew which made REVA HACK possible through their sheer
          hardwork and a will to do something great
        </p> */}
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={4000}
            width="1440px"
            height="919px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            // captionPosition={false}
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="black"
            thumbnails={false}
            thumbnailWidth="100px"
            slideImageFit="contain"
            style={{
              textAlign: "center",
              maxWidth: "1440px",
              maxHeight: "919px",
              margin: "80px auto",
            }}
          />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
