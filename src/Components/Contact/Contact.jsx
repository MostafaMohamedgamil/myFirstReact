import React, { Component } from 'react'
import './Contact.css';
import Footer from './../Footer/Footer';
import Navbar from '../Navbar/Navbar';
export class Contact extends Component {


    render() {
        return <>
            {/* <Navbar/> */}
            <div className="contact ">

                <div className="container w-50">

                    <div className="top">
                        <h3 className='text-center contactSection'>CONATCT SECTION</h3>
                        <div className="lines d-flex  justify-content-center align-items-center mb-3">

                            <div className="lineLe me-1"></div>
                            <i className="fa-solid fa-star "></i>
                            <div className="lineLe ms-1"></div>

                        </div>

                    </div>

                    <form className='formContact'>
                        <div className="form-floating">
                            <input type="text" className="form-control border-top-0 border-start-0 border-end-0 mb-4" id="floatingName" placeholder="userName" />
                            <label htmlFor="floatingName">userName</label>
                        </div>

                        <div className="form-floating">
                            <input type="number" className="form-control border-top-0 border-start-0 border-end-0 mb-4" id="floatingAge" placeholder="userAge" />
                            <label htmlFor="floatingAge">userAge</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control border-top-0 border-start-0 border-end-0 mb-4" id="floatingEmail" placeholder="userEmail" />
                            <label htmlFor="floatingEmail">userEmail</label>
                        </div>

                        <div className="form-floating">
                            <input type="password" className="form-control  border-top-0 border-start-0 border-end-0 mb-4" id="floatingPassword" placeholder="userPassword" />
                            <label htmlFor="floatingPassword">userPassword</label>
                        </div>


                        <button className="button-89" role="button">send Message</button>

                    </form>

                </div>

            </div>


        </>
    }


}

export default Contact



