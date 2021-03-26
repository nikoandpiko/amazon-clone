import React from "react";
import Product from "../components/Product";
import "../home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Prime poster"
      />
      <div className="home__row">
        <Product
          id="1616738511"
          title="Total Recall: My Unbelievably True Life Story"
          price={14.92}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41icfHfzIxL._SX331_BO1,204,203,200_.jpg"
        />
        <Product
          id="1616738329"
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con"
          price={319.92}
          rating={5}
          image="https://m.media-amazon.com/images/I/61-PblYntsL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1616738628"
          title="4K Video Camera Ultra HD Camcorder 48.0MP IR"
          price={141.29}
          rating={4}
          image="https://m.media-amazon.com/images/I/61kPTweW6zL._AC_UY218_.jpg"
        />
        <Product
          id="1616738762"
          title="Teenage Mutant Ninja Turtles Action Figure 6 PCS Set"
          price={19.48}
          rating={4}
          image="https://m.media-amazon.com/images/I/71dzko8tixL._AC_UL320_.jpg"
        />
        <Product
          id="1616738905"
          title="TREATLIFE Smart LED RGB Strip Lights, 16.4ft, WiFi"
          price={19.56}
          rating={4}
          image="https://m.media-amazon.com/images/I/71-y9dX28XL._AC_UL320_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1616739062"
          title="Samsung 65-inch Class QLED Q800T Series - Real 8K Resolution Direct Full Array 24X Quantum HDR 16X Smart TV with Alexa Built-in"
          price={2601.89}
          rating={5}
          image="https://m.media-amazon.com/images/I/61YRZhpXdiL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
