import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428584220_.jpg"
        alt="banner"
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="Camera Camera Camera Camera Camera Camera Camera Camera Camera "
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41CED+NsupL._AC_SY200_.jpg"
        />
        <Product
          id="12321341"
          title="Washing Machine Washing Machine"
          price={10.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/81X52AI2ovL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="Camera Camera Camera Camera Camera Camera Camera Camera Camera "
          price={25}
          rating={5}
          image="https://images.pexels.com/photos/122400/pexels-photo-122400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Product
          id="12321341"
          title="IPhone IPhone IPhone "
          price={111.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          // image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
        <Product
          id="12321341"
          title="IPhone IPhone IPhone IPhone IPhone IPhone IPhone IPhone IPhone IPhone IPhone IPhone IPhone IPhone "
          price={111.96}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Camera Camera Camera Camera Camera Camera Camera Camera Camera "
          price={10.5}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71el-PAu1IL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
