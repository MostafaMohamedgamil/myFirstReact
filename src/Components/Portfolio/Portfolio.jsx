import React, { Component } from 'react';
import "./Portfolio.css"
import port1 from '../../../src/img/port1.png';
import port2 from '../../../src/img/port2.png';
import port3 from '../../../src/img/port3.png';


export class Portfolio extends Component {


    toAppear = () => {
        const allcaption = document.querySelectorAll('figcaption');
        const allImg = document.querySelectorAll('img');
        const myLayer = document.querySelector('.myLayer')

        for (let i = 0; i < allImg.length; i++) {

            allcaption[i].addEventListener('click', function () {

                let clickedImageSrc = allImg[i].getAttribute("src");  //../../img/port1.png

                myLayer.classList.remove("d-none");

                let innerDiv = document.querySelector('.innerDiv');
                innerDiv.style.backgroundImage = `url(${clickedImageSrc})`;

            })
        }


    }

    toClose = () => {
        const myLayer = document.querySelector('.myLayer')


        myLayer.addEventListener("click", function (e) {

            if (e.target == myLayer) {
                myLayer.classList.add("d-none")
            }

            console.log(e.target);
        })
    }




    render() {

        return <>


            <div className="Portfolio  mb-3">

                <div className="container">
                    <div className="top text-center">

                        <h2>PORTFOLIO COMPONENT</h2>

                        <div className="lines d-flex  justify-content-center align-items-center mb-3">
                            <div className="lineLe me-3"></div>

                            <i class="fa-solid fa-star "></i>
                            <div className="lineLe ms-3"></div>
                        </div>
                    </div>




                    <div className="row gy-3">

                        <div className="col-md-4 col-sm-6">

                            <figure onClick={() => { this.toAppear() }}
                                className='position-relative'>

                                <img src={port1} className='w-100 rounded-3' alt="" />
                                <figcaption className=' captionLayer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                                    <i className="fa-solid d-none fa-plus fa-6x text-white border-0"></i>

                                </figcaption>

                            </figure>

                        </div>


                        <div className="col-md-4 col-sm-6">

                            <figure onClick={() => { this.toAppear() }}
                                className='position-relative'>

                                <img src={port2} className='w-100 rounded-3' alt="" />
                                <figcaption className=' captionLayer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                                    <i className="fa-solid d-none fa-plus fa-6x text-white border-0"></i>

                                </figcaption>

                            </figure>

                        </div>


                        <div className="col-md-4 col-sm-6">

                            <figure onClick={() => { this.toAppear() }}
                                className='position-relative'>

                                <img src={port3} className='w-100 rounded-3' alt="" />
                                <figcaption className=' captionLayer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                                    <i className="fa-solid d-none fa-plus fa-6x text-white border-0"></i>

                                </figcaption>

                            </figure>

                        </div>


                        <div className="col-md-4 col-sm-6">

                            <figure onClick={() => { this.toAppear() }}
                                className='position-relative'>

                                <img src={port3} className='w-100 rounded-3' alt="" />
                                <figcaption className=' captionLayer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                                    <i className="fa-solid d-none fa-plus fa-6x text-white border-0"></i>

                                </figcaption>

                            </figure>

                        </div>


                        <div className="col-md-4 col-sm-6">

                            <figure onClick={() => { this.toAppear() }}
                                className='position-relative'>

                                <img src={port2} className='w-100 rounded-3' alt="" />
                                <figcaption className=' captionLayer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                                    <i className="fa-solid d-none fa-plus fa-6x text-white border-0"></i>

                                </figcaption>

                            </figure>

                        </div>


                        <div className="col-md-4 col-sm-6">

                            <figure onClick={() => { this.toAppear() }}
                                className='position-relative'>

                                <img src={port1} className='w-100 rounded-3' alt="" />
                                <figcaption className=' captionLayer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                                    <i className="fa-solid d-none fa-plus fa-6x text-white border-0"></i>

                                </figcaption>

                            </figure>

                        </div>



                    </div>
                </div>

                <div onClick={() => { this.toClose() }}
                    class=" d-none roo myLayer d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 end-0 start-0 bg-black bg-opacity-50">

                    <div class="innerDiv d-flex justify-content-between align-items-center position-relative">

                    </div>


                </div>

            </div>


        </>
    }
}

export default Portfolio




















// import React, { useEffect, useState } from 'react'
// import styles from './portfolio.module.css'
// import tent from '../../assists/images/tent.png'
// import house from '../../assists/images/house.png'
// import cake from '../../assists/images/cake.png'
// import SectionHeader from '../Section-Header/Section-Header'
// export default function Portfolio() {


//     const [src, setSrc] = useState("")

//     useEffect(() => {
//         let projects = document.querySelectorAll(".project")

//         for (let i = 0; i < projects.length; i++) {
//             projects[i].addEventListener("click", function () {
//                 setSrc(this.children[0].src)
//                 document.querySelector("#details").classList.remove("d-none")
//             })
//         }

//         document.querySelector("#details").addEventListener("click", function (e) {
//             document.querySelector("#details").classList.add("d-none")
//         })
//         document.querySelector("#details img").addEventListener("click", function (e) {
//             e.stopImmediatePropagation()
//         })

//     })



//     return (
//         <>

//             <div className="bg-white position-absolute top-0 bottom-0 start-0 end-0 z-n1"></div>

//             <div id='details' className="d-none details bg-primary bg-opacity-50 d-flex justify-content-center align-items-center position-fixed  top-0 bottom-0 start-0 end-0 z-3">


//                 <div className="container">
//                     <div className="inner w-50 mx-auto ">
//                         <img src={src} alt="" className='w-100' />
//                     </div>
//                 </div>
//             </div>


//             <section id="portfolio" className='text-center bg-white  py-5 '>
//                 <div className="container ">

//                     <SectionHeader h1='protfolio component' />
//                     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-start px-5  gy-4 mt-1">

//                         <div className="col">
//                             <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
//                                 <img className='w-100 ' src={house} alt="house" />
//                                 <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
//                                     <i className='fa-solid fa-plus text-white   display-1   '></i>
//                                 </div>
//                             </div>
//                         </div>






















//                         <div className="col">
//                             <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
//                                 <img className='w-100 ' src={cake} alt="cake" />
//                                 <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
//                                     <i className='fa-solid fa-plus text-white   display-1   '></i>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col">
//                             <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
//                                 <img className='w-100 ' src={tent} alt="tent" />
//                                 <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
//                                     <i className='fa-solid fa-plus text-white   display-1   '></i>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col">
//                             <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
//                                 <img className='w-100 ' src={house} alt="house" />
//                                 <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
//                                     <i className='fa-solid fa-plus text-white   display-1   '></i>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col">
//                             <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
//                                 <img className='w-100 ' src={cake} alt="cake" />
//                                 <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
//                                     <i className='fa-solid fa-plus text-white   display-1   '></i>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col">
//                             <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
//                                 <img className='w-100 ' src={tent} alt="tent" />
//                                 <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
//                                     <i className='fa-solid fa-plus text-white   display-1   '></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }























