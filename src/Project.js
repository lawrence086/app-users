import React from "react";
import "./Project.css";
import Project3 from './img/e-society.png';
import Project4 from './img/adminMock.png';
import Project1 from './img/e-hotel.png';
import { Card } from 'react-bootstrap';

function Project() {
  return (
    
    <div className="container-fluid bg-light">
         <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading-h">My Projects</h1>
      </div>
       <div className="container">
           <div className="row">

             <div className="col__3">
                <Card>
                    <Card.Body>
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project1} alt="e-inns project" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">e-Hotel App</h5>
                        </div>
                    </div>
                    </Card.Body>
                </Card>
             </div>


             <div className="col__3 pt-3">
                <Card>
                    <Card.Body>
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project3} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">e-society app</h5>
                        </div>
                    </div>
                    </Card.Body>
                </Card>
                
             </div>


             <div className="col__3">
                <Card className="bg-light">
                        <Card.Body>
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project4} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">e-hotel Admin</h5>
                        </div>
                    </div>
                    </Card.Body>
                </Card>
             </div>

           </div>
       </div>
    </div>
    </div>
   
  );
}

export default Project;
