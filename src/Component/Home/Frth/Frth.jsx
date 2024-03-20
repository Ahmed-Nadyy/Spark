import React from 'react'
import icon1 from "./img/1.png"
import icon2 from "./img/2.png"
import icon3 from "./img/3.png"
import icon4 from "./img/4.png"
import icon5 from "./img/5.png"
import icon6 from "./img/6.png"
import './Frth.css'

export default function Frth() {
  return (
    <>
       <div className="Frth d-flex flex-column justify-content-center align-items-center" >
       <div className="text-center text-derk  container ">
       <h3 className='heading-font-r mb-3'>Top <span style={{color:"#4BE5CA",fontFamily:"Rowdies"}}> Categories </span></h3>
       <p>12,000+ unique online course list designs</p>
       <div className="d-inline-block mt-5">
        <div className="cat-body d-inline-block">
            <img src={icon1} className='icon mb-5' alt="" />
            <h5>Digtal Marketing</h5>
            <p>25 Courses</p>
        </div>
        <div className="cat-body d-inline-block">
            <img src={icon2} className='icon  mb-5' alt="" />
            <h5>Web Development</h5>
            <p>25 Courses</p>
        </div>
        <div className="cat-body d-inline-block">
            <img src={icon3} className='icon mb-5' alt="" />
            <h5>Art & Humanities</h5>
            <p>25 Courses</p>
        </div>
        <div className="cat-body d-inline-block">
            <img src={icon4} className='icon mb-5' alt="" />
            <h5>Personal Development</h5>
            <p>25 Courses</p>
        </div>
        <div className=" cat-body d-inline-block">
            <img src={icon5} className='icon mb-5' alt="" />
            <h5>IT and Software</h5>
            <p>25 Courses</p>
        </div>
        <div className="cat-body d-inline-block">
            <img src={icon6} className='icon mb-5' alt="" />
            <h5>Graphics Design</h5>
            <p>25 Courses</p>
        </div>
       </div>
       </div>
       </div>
    </>
  )
}
