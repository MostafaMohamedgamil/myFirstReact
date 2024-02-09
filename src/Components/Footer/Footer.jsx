import React, { PureComponent } from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';
class Footer extends PureComponent {


    render() {
        return <>
            <div className="footer">


                <div className="container m-auto">
                    <div className="footerContent p-5  text-center">
                        <div className="row">

                            <div className="col-md-4">
                                <div className="left">
                                    <h3>LOCATION</h3>
                                    <p>2215 John Daniel Drive</p>
                                    <p>Clark, MO 65243</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="middle">
                                    <h3>AROUND THE WEB</h3>
                                    <div className="icons  ">
                                        <ul className='d-flex align-items-center justify-content-center'>
                                            <li >
                                                <i className=" me-2 fa-brands fa-facebook"></i>
                                            </li>
                                            <li >
                                                <i className="me-2 fa-brands fa-twitter"></i>
                                            </li>
                                            <li >
                                                <i className="me-2 fa-brands fa-linkedin"></i>
                                            </li>
                                            <li >
                                                <i className="me-2 fa-solid fa-globe"></i>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="right">
                                    <h3>ABOUT FREELANCER</h3>
                                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="fotter-bottom d-flex justify-content-center align-items-center">
                    <p>Copyright © Your Website 2021</p>
                </div>
            </div>

        </>
    }
}

export default Footer