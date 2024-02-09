import React, { Component } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
class Navbar extends Component {




    // toAppear = () => {
    //     // const allcaption = document.querySelectorAll('Link');
    //     const allLink = document.querySelectorAll('Link');
    //     // const allImg = document.querySelectorAll('img');
    //     // const myLayer = document.querySelector('.myLayer')

    //     // for (let i = 0; i < allImg.length; i++) {
    //     for (let i = 0; i < allLink.length; i++) {

    //         allLink[i].addEventListener('click', function () {

    //             // let clickedImageSrc = allImg[i].getAttribute("src");  //../../img/port1.png

    //             // myLayer.classList.remove("d-none");
    //             // body.style.backgroundColor = "red";
    //             allLink.style.backgroundColor="red";
    //             // let innerDiv = document.querySelector('.innerDiv');
    //             // innerDiv.style.backgroundImage = `url(${clickedImageSrc})`;

    //         })
    //     }


    // }


    // toAppear = () =>{
    //     const Hover=document.querySelectorAll(".nav-link");
    //     Hover.addEventListener("click",function(){
    //         //innerDiv.style.backgroundImage = `url(${clickedImageSrc})`;
    //         Hover.style.backgroundColor=`#1ABC9C`;
    //     })
    // }

    render() {
        return <>

            <nav className="navbar fixed-top navbar-expand-lg ">
                <div className="container">
                    <Link  className="text-white navbar-brand startframe" to="/home">START FRAMEFORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="text-white nav-link  me-2 active " aria-current="page" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="text-white nav-link me-2" to="/portfolio">Portofolio</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="text-white nav-link me-2" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>











        </>
    }
}

export default Navbar