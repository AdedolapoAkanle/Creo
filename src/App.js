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
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Pricing</ul>
                <ul>Contact Us</ul>
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
          <div className="left">
            <div className="about">about us</div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              facere. Eos ut, in temporibus magni perspiciatis expedita unde
              eligendi tenetur quaerat quasi animi iure totam et doloribus fuga
              consequuntur fugit.
            </div>

            <li>
              <ul>
                <img src="./img/Vector(1).png" alt="" />
                Design
              </ul>
              <ul>
                <img src="img/" alt="" />
                Branding
              </ul>
            </li>
          </div>
          <div className="right"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
