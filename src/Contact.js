import React from 'react';
import './Contact.css';
function Contact() {
    return (
        <div className="container-fluid p-0 m-0 bg-dark">
            <div className="container p-3">
            <div className="contact__box p-0 m-0">
                        <div className="contact__meta p-0 m-0">
                            <h1 className="hire__text p-0 ">CONTACT ME</h1>
                            <p className="hire__text white p-0 m-0">I am available on the following social and contact platforms:</p>
                           
                           <div className="ps-3 pt-3 d-flex">
                                <i class="bi bi-telephone pe-3 text-light"></i>
                                <p className="d-flex text-light">(+27) 60 924 5249</p>
                           </div>

                           <div className="ps-3 d-flex">
                                <i class="bi bi-envelope-fill pe-3 text-light"></i>
                                <p className="d-flex text-light">lawrencesekgoka086@gmail.com</p>
                           </div>

                           <div className="ps-3 d-flex">
                                <i class="bi bi-linkedin pe-3 text-light"></i>
                                <p className="d-flex text-light">Lawrence Madike Sekgoka</p>
                           </div>



                        </div>
                        
                    </div>
            </div>
            {/* <div className="contact component__space p-5" id="Contact">
            <div className="row p-4">
                <div className="col__2 p-0 m-0">
                    
                </div>
            </div>
        </div> */}
        </div>
        
    )
}

export default Contact
