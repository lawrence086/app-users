import React from "react";
import "./About.css";
import aboutImg from "./img/prof.png";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container" id="container-content">
        <div className="row">

          <div className="col__2 my-auto mx-auto">
            <img src={aboutImg} alt="" className="about__img" />
          </div>

          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              
              <p className="about__text text-light">
                I'm a team oriented software developer currently developing an e-society application and a hotel mobile system at the mlab organization.
                My passion & foundation in graphic design helps me in building user friendly UX/UI designs for mobile and web  platforms.
              </p>
              
              <p className="about__text text-light">
                I am currently enrolled at the Tshwane University Of Technology, studying an advanced diploma in computer science.
              </p>
              
              <div className="about__button d__flex align__items__center">

              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#home" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
