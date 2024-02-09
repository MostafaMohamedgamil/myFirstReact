import React, { Component } from 'react'
import "./Home.css"
import img from '../../img/download.svg'
class Home extends Component {


    render() {
        return <>
            <div className="home d-flex justify-content-center align-items-center">

                <div className="content text-white rounded-5 text-center">
                    <img src={img} className='mb-3' alt="" />
                    
                        <h2 className='mb-3'>START FRAMEWORK</h2>

                        <div className="lines d-flex  justify-content-center align-items-center mb-3">
                            <div className="lineLe bg-white me-3 "></div>

                            <i class="fa-solid fa-star border-0 "></i>
                            <div className="lineLe bg-white ms-3"></div>
                        </div>

                        <div className='bottom'>Graphic Artist - Web Designer - Illustrator</div>
                </div>


            </div>
        </>
    }
}

export default Home