import React, { Component } from 'react'
import "./About.css";
import Footer from './../Footer/Footer';
export class About extends Component {


    render() {
        return <>
            <div className="about">
                <div className=" container text-center">
                    <div className="top text-white">

                        <h2>ABOUT COMPONENT</h2>
                    </div>

                    <div className="lines d-flex  justify-content-center align-items-center mb-3">
                        <div className="lineLe me-3 bg-white"></div>

                        <i class="fa-solid fa-star "></i>
                        <div className="lineLe ms-3 bg-white"></div>
                    </div>

                    <div className="content">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 aboutContent">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                            <div className="col-md-6 col-sm-12 aboutContent">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    }
}

export default About