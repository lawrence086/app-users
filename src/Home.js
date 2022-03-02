import React from "react";
import "./Home.css";
import mock from "./img/mock.png";
import logoTrans from "./img/logo_transparent.png";
import { Button } from 'react-bootstrap';

function Home() {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="home p-0 m-0" id="Home">
      <div className="home__bg p-0 m-0">
      <div className="container p-0 m-auto">
      <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logoTrans} alt="" className="logo-img"/>
          </div>
          <div className="navigation pxy__30 ">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
        
        {/* HOME CONTENT */}
        <div className="container content-con">
            <div className="row">
              <div className="col col-md-8 col-lg-8 col-sm-12">
              <div className="home__content ps-5">
                <div className="home__meta ps-5">
                  <h2 className="home__text pz__10">Hi, I’m Daniel Mawasha</h2>
                  <h3 className="home__text sweet pz__10 lead text-light">Software Developer & Designer</h3>
                </div>
                <div className="row">
                  <div className="col col-md col-lg col-sm-12 ps-5 ms-3 mt-3">
                    <Button variant="dark" className="btn-contact">Contact Me</Button>
                  </div>
                  <div className="col col-md col-lg col-sm-12">
                    
                  </div>
                </div>
              </div>
              </div>
              <div className="col col-md col-lg">
                <img src={mock} alt="" className="mock-img"/>
              </div>
            </div>
        </div>
       
      </div>
    </div>
  );
}

export default Home;
