import React from "react";
import { Carousel } from "react-carousel-minimal";
import crew1 from "../images/crew1.png";

export default function CarouselDiv() {
  const data = [
    {
      image:
        "https://lh6.googleusercontent.com/ePv5kOy1yCK0eZiwLReMOfu6u4CRzCSKrdfHNuzVW_DCOLdmCpPzbNcUmE5CtTPSaIhYEqVLkqJ7hg=w1920-h942-rw",
    },
    {
      image:
        "https://lh3.googleusercontent.com/rDzuMYxdkHXP6WVLuOhQ2CqYfYOZniM5Lumlpa_fX5K1dy3DlUkPkNnbbmJtH2SBnbOgTYPMyvHsbg=w1920-h942-rw",
    },
    {
      image: "https://docs.google.com/uc?id=118G9UUThsIFiUFqjFqOh_UYOcsVQFLpf",
    },
    {
      image: "https://docs.google.com/uc?id=1CbxdMd0EYVqCXLOdwEdT0V3zfc_a0Eyl",
    },
    {
      image: "https://docs.google.com/uc?id=1xB6iEHLq5j3nKeq5Z9O9s8sYfpV75RhD",
    },
    {
      image: "https://docs.google.com/uc?id=1D4Jj7RaNbn3vgODT7gqoflm1IjJ5eFEY",
    },
    {
      image: "https://docs.google.com/uc?id=1dnbYJZbrrXWDAbaMvcO7LrYNvar2Br3W",
    },
    {
      image: "https://docs.google.com/uc?id=1ti_rMwvD14I2DhIJOSn2nUZwNVvMIZ7y",
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
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
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
