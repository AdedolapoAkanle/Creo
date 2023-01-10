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
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import img8 from "./img/img8.png";
import img9 from "./img/img9.png";
import insta2 from "./img/insta2.png";
import twitter from "./img/twitter.png";
import facebook from "./img/facebook.png";
import insta from "./img/insta.png";
import fb from "./img/fb.png";
import twt from "./img/twt.png";
import arrow from "./img/Arrow.png";
import clock from "./img/clock.png";
import map from "./img/map.png";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="App">
      <button onClick={toggleTheme}>Switch</button>
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

        {/* About section */}
        <section className={`about-section ${theme}`}>
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
                    <img className="list-icon" src={design} alt="" />
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
                    <img className="list-icon" src={brand} alt="" />
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
            <div className="right">
              <img className="about-image" src={img2} alt="" />
            </div>
          </div>
        </section>

        {/* Offer section */}
        <section className={`offer-section ${theme}`}>
          <div className="offer-header">
            What we Offer <hr className="offer-hr" />
          </div>
          <div className="options">
            <div className="option">
              <img className="offer-image" src={design} alt="" />
              <div className="offer-header">Amazing UI</div>
              <div className="option-text text-1">
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
              <div className="option-text text-1">
                Amazing UI Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Egestas nullam vitae montes, ipsum, erat consequat eros
              </div>
            </div>
          </div>
        </section>
        <section className={`pricing-section ${theme}`}>
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

        {/* Works section */}
        <section className="works-section">
          <div className="offer-header">
            Latest Works <hr className="offer-hr" />
          </div>
          {/* <div className="box1">red</div> */}
          <div className="picture-container">
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

        {/* Team section */}
        <section className="team-section">
          <div className="offer-header">
            Our Team <hr className="offer-hr" />
          </div>
          <div className="box-container">
            <div className="box">
              <div className="image-container">
                <img className="team-image" src={img5} alt="" />
              </div>
              <div className="box-name">thomas jackson</div>
              <div className="box-description">Brand Consultant</div>
              <div className="box-icon">
                <img className="team-icon" src={insta2} alt="" />
                <img className="team-icon" src={twitter} alt="" />
                <img className="team-icon" src={facebook} alt="" />
              </div>
            </div>
            <div className="box">
              <div className="image-container">
                <img className="team-image" src={img4} alt="" />
              </div>
              <div className="box-name">annie doe</div>
              <div className="box-description">CEO</div>
              <div className="box-icon">
                <img className="team-icon" src={insta2} alt="" />
                <img className="team-icon" src={twitter} alt="" />
                <img className="team-icon" src={facebook} alt="" />
              </div>
            </div>
            <div className="box">
              <div className="image-container">
                <img className="team-image" src={img3} alt="" />
              </div>
              <div className="box-name">angelina doe</div>
              <div className="box-description">User Research</div>
              <div className="box-icon">
                <img className="team-icon" src={insta2} alt="" />
                <img className="team-icon" src={twitter} alt="" />
                <img className="team-icon" src={facebook} alt="" />
              </div>
            </div>
          </div>
          <div className="team-hr">
            <hr />
            <hr />
            <hr />
          </div>
        </section>

        {/* Latest section */}
        <section className="latest-section">
          <div className="offer-header">
            Latest News <hr className="offer-hr" />
          </div>
          <div className="latest-image">
            <div className="img-container">
              <img className="latest-img" src={img9} alt="" />
              <div className="text-block">
                <div>How to Get that client of your Choice</div>
                <p>
                  <img className="clock" src={clock} alt="" />
                  <div className="days">3days ago</div>
                </p>
              </div>
            </div>
            <div className="img-container">
              <img className="latest-img" src={img6} alt="" />
              <div className="text-block">
                <div>Stay at the top of business meetings</div>
                <p>
                  <img className="clock" src={clock} alt="" />
                  <div className="days">3days ago</div>
                </p>
              </div>
            </div>
            <div className="img-container">
              <img className="latest-img" src={img7} alt="" />
              <div className="text-block">
                <div>How to get inspired fast</div>
                <p>
                  <img className="clock" src={clock} alt="" />
                  <div className="days">3days ago</div>
                </p>
              </div>
            </div>
            <div className="img-container">
              <img className="latest-img" src={img8} alt="" />
              <div className="text-block">
                <div>Know at all times what a client wants</div>
                <p>
                  <img className="clock" src={clock} alt="" />
                  <div className="days">3days ago</div>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section*/}
        <section className="contact-section">
          <div className="contact">
            <div className="contact-info">
              <div className="about">contact us</div>
              <hr className="about-hr " />
              <div className="contact-field">
                <input className="input" type="text" placeholder="Name" />
                <input className="input" type="text" placeholder="Message" />
                <div className="contact-btn">message</div>
              </div>
            </div>
            <div className="contact-map">
              <img className="map" src={map} alt="" />
            </div>
          </div>
        </section>
        <section className="footer-section">
          <div className="footer-content">
            <div className="footer-name">Creo</div>
            <div className="footer-text">
              <div className="foot">Follow us on </div>

              <div className="span">
                <img className="footer-icon" src={insta} alt="" />
                <img className="footer-icon" src={twt} alt="" />
                <img className="footer-icon" src={fb} alt="" />
              </div>
            </div>
            <div className="footer-text">
              <div className="foot">Subscribe to our News letter</div>
              <div className="footer-input">
                <input
                  className="footer-field"
                  type="text"
                  placeholder="Email"
                />
                <img className="arrow" src={arrow} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
