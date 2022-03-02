import React from "react";
import "./Service.css";
import web from './img/app.png';
import app from './img/web.png';
import ui from './img/ui.png';

function Service() {
  return (
    <div className="conatiner-fluid">
      <div className="service component__space" id="Services">

          <div className="heading">
            <h1 className="heading">My Skills</h1>
          </div>

          <div className="container">
            <div className="row">
            
              <div className="col__3">
                <div className="service__box pointer">
                  <div className="icon">
                    <img src={web} alt="web" className="icon-skill"/>
                  </div>
                  <div className="service__meta">
                    <h1 className="service__text">Website Development</h1>
                    <p className="p service__text p__color">
                      FRONT-END DESIGN 
                    </p>
                    <p className="p service__text p__color">
                      FRONT-END DEVELOPER
                    </p>
                  </div>
                </div>
              </div>

              <div className="col__3">
                <div className="service__box pointer">
                  <div className="icon">
                  <img src={app} alt="web" className="icon-skill"/>
                  </div>
                  <div className="service__meta">
                    <h1 className="service__text">Mobile App Development</h1>
                    <p className="p service__text p__color">
                      SOFTWARE DESIGN
                    </p>
                    <p className="p service__text p__color">
                      FRONT-END DEVELOPER
                    </p>
                  </div>
                </div>
              </div>

            
              <div className="col__3">
                <div className="service__box pointer">
                  <div className="icon">
                    <img src={ui} alt="web" className="icon-skill"/>
                  </div>
                  <div className="service__meta">
                    <h1 className="service__text ">UI/UX Design</h1>
                    <p className="p service__text p__color lead">
                      WEB DESIGN
                    </p>
                    <p className="p service__text lead p__color">MOBILE APP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
    
  );
}

export default Service;
