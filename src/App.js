import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);
  //`App ${theme}`
  return (
    <div className="App">
      {/* <button onClick={toggleTheme}>Switch</button> */}
      <div className="container">
        <section className="section">
          <div className="blur">
            <div className="section-nav">
              <div className="name">Creo</div>
              <li className="list">
                <ul className="li home">Home</ul>
                <ul className="li">About Us</ul>
                <ul className="li">Pricing</ul>
                <ul className="li">Contact Us</ul>
              </li>
            </div>
            <div className="main">
              <div className="text-top">Bring out the creativity</div>
              <div className="text-bottom">
                We are idea-driven, working with a strong focus on design and
                user experience. That is what your brand and audience deserve
              </div>
              <div className="button">get started</div>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="abt">
            <div className="left">
              <div className="about">about us</div>
              <hr />
              <div className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium magnam beatae praesentium nulla dicta, laborum id.
                Rerum officiis molestiae.
              </div>

              <li className="about-list">
                <ul className="list-val">
                  <img src="./img/Vector(1).png" alt="" />
                  Design
                  <div className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium magnam beatae praesentium nulla dicta, laborum
                    id.
                  </div>
                </ul>
                <ul className="list-val">
                  <img src="img/" alt="" />
                  Branding
                  <div className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium magnam beatae praesentium nulla dicta, laborum
                    id.
                  </div>
                </ul>
              </li>
            </div>
            <div className="right">{/* <h1>Welcome</h1> */}</div>
          </div>
        </section>
        <section className="offer-section">
          <div className="offer-header">
            What we Offer <hr className="offer-hr" />
          </div>
          <div className="options">
            <div className="option">
              <img src="" alt="" />
              <div className="offer-header">Amazing UI</div>
              <div className="option-text">
                Amazing UI Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Egestas nullam vitae montes, ipsum, erat consequat eros
              </div>
            </div>
            <div className="option">
              <img src="" alt="" />
              <div className="offer-header">Creative Websites</div>
              <div className="option-text">
                Amazing UI Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Egestas nullam vitae montes, ipsum, erat consequat eros
              </div>
            </div>
            <div className="option">
              <img src="" alt="" />
              <div className="offer-header">Fast Delivery</div>
              <div className="option-text">
                Amazing UI Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Egestas nullam vitae montes, ipsum, erat consequat eros
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
