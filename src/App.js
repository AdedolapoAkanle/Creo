import React, { useEffect, useState } from "react";
import "./App.css";
import design from "./img/design.png";
import brand from "./img/brand.png";
import brain from "./img/brain.png";
import fast from "./img/fast.png";
import essential from "./img/essential.png";
import standard from "./img/standard.png";
import premium from "./img/premium.png";
import check from "./img/black-check.png";
import check2 from "./img/white-check.png";
import photo from "./img/photography.png";
import med from "./img/med.png";
import couple from "./img/couple.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import insta from "./img/insta.png";
import insta2 from "./img/insta2.png";
import twitter from "./img/twitter.png";
import facebook from "./img/facebook.png";

function App() {
  // let img1 = require("./img/")
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
              <hr className="about-hr " />
              <div className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium magnam beatae praesentium nulla dicta, laborum id.
                Rerum officiis molestiae.
              </div>

              <li className="about-list">
                <ul className="list-val">
                  <div className="list-image">
                    <img src={design} alt="" />
                  </div>
                  <div className="">
                    Design
                    <div className="about-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium magnam beatae praesentium nulla dicta, laborum
                      id.
                    </div>
                  </div>
                </ul>
                <ul className="list-val">
                  <div className="list-image">
                    <img src={brand} alt="" />
                  </div>
                  <div className="">
                    {" "}
                    Branding
                    <div className="about-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium magnam beatae praesentium nulla dicta, laborum
                      id.
                    </div>
                  </div>
                </ul>
              </li>
            </div>
            <div className="right"></div>
          </div>
        </section>
        <section className="offer-section">
          <div className="offer-header">
            What we Offer <hr className="offer-hr" />
          </div>
          <div className="options">
            <div className="option">
              <img src={design} alt="" />
              <div className="offer-header">Amazing UI</div>
              <div className="option-text">
                Amazing UI Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Egestas nullam vitae montes, ipsum, erat consequat eros
              </div>
            </div>
            <div className="option">
              <img className="offer-image" src={brain} alt="" />
              <div className="offer-header">Creative Websites</div>
              <div className="option-text">
                Amazing UI Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Egestas nullam vitae montes, ipsum, erat consequat eros
              </div>
            </div>
            <div className="option">
              <img className="offer-image" src={fast} alt="" />
              <div className="offer-header">Fast Delivery</div>
              <div className="option-text">
                Amazing UI Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Egestas nullam vitae montes, ipsum, erat consequat eros
              </div>
            </div>
          </div>
        </section>
        <section className="pricing-section">
          <div className="offer-header">
            Pricing Packages <hr className="offer-hr" />
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-image">
                {" "}
                <img className="card-img" src={essential} alt="" />
              </div>

              <div className="card-type">essential</div>
              <div className="card-price">
                <div className="card-symbol">$</div>134
              </div>
              <li className="card-list">
                <ul className="card-list-val">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check} alt="" />
                  </div>
                </ul>
              </li>
              <div className="card-btn card-btn-1">choose plan</div>
            </div>
            <div className="card card-blue">
              <div className="card-image">
                <img className="card-img" src={standard} alt="" />
              </div>

              <div className="card-type">standard</div>
              <div className="card-price">
                <div className="card-symbol">$</div>200
              </div>
              <li className="card-list">
                <ul className="card-list-val card-list-val-blue">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check check-blue" src={check2} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val card-list-val-blue">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check2} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val card-list-val-blue">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check2} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val card-list-val-blue">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check2} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val card-list-val-blue">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check2} alt="" />
                  </div>
                </ul>
              </li>
              <div className="card-btn card-btn-blue">choose plan</div>
            </div>
            <div className="card">
              <div className="card-image">
                <img className="card-img" src={premium} alt="" />
              </div>

              <div className="card-type">premium</div>
              <div className="card-price">
                <div className="card-symbol">$</div>300
              </div>
              <li className="card-list">
                <ul className="card-list-val">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check} alt="" />
                  </div>
                </ul>
                <ul className="card-list-val">
                  Lorem ipsum dioade ra mashukan
                  <div>
                    {" "}
                    <img className="check" src={check} alt="" />
                  </div>
                </ul>
              </li>
              <div className="card-btn">choose plan</div>
            </div>
          </div>
        </section>
        <section className="works-section">
          <div className="offer-header">
            Latest Works <hr className="offer-hr" />
          </div>
          {/* <div className="box1">red</div> */}
          <div className="img-container">
            <div className="work-img">
              <img className="work-image" src={photo} alt="" />
              <div className="image-tag">
                <div className="image-name">john doe photography</div>
                <div className="image-link">View site</div>
              </div>
            </div>
            <div className="work-img">
              <img className="work-image" src={med} alt="" />
              <div className="image-tag">
                <div className="image-name">medilab</div>
                <div className="image-link">View site</div>
              </div>
            </div>
            <div className="work-img">
              <img className="work-image" src={couple} alt="" />
              <div className="image-tag">
                <div className="image-name">planite</div>
                <div className="image-link">View site</div>
              </div>
            </div>
            <div className="work-img">
              <img className="work-image" src={med} alt="" />
              <div className="image-tag">
                <div className="image-name">medilab</div>
                <div className="image-link">View site</div>
              </div>
            </div>
            <div className="work-img">
              <img className="work-image" src={couple} alt="" />
              <div className="image-tag">
                <div className="image-name">planite</div>
                <div className="image-link">View site</div>
              </div>
            </div>
            <div className="work-img">
              <img className="work-image" src={photo} alt="" />
              <div className="image-tag">
                <div className="image-name">john doe photography</div>
                <div className="image-link">View site</div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section">
          <div className="offer-header">
            Our Team <hr className="offer-hr" />
          </div>
          <div className="box-container">
            <div className="box">
              <div className="image-container">
                <img src={img5} alt="" />
              </div>
              <div className="box-name">thomas jackson</div>
              <div className="box-description">Brand Consultant</div>
              <div className="box-icon">
                <img src={insta2} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
              </div>
            </div>
            <div className="box">
              <div className="image-container">
                <img src={img4} alt="" />
              </div>
              <div className="box-name">thomas jackson</div>
              <div className="box-description">CEO</div>
              <div className="box-icon">
                <img src={insta2} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
              </div>
            </div>
            <div className="box">
              <div className="image-container">
                <img src={img3} alt="" />
              </div>
              <div className="box-name">thomas jackson</div>
              <div className="box-description">User Research</div>
              <div className="box-icon">
                <img src={insta2} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
              </div>
            </div>
          </div>
          <div className="team-hr">
            <hr />
            <hr />
            <hr />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
