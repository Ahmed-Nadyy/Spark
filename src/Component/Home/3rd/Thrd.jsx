import React from 'react';
import linee from './img/Line15.png';
import icon1 from './img/Icon1.png';
import icon2 from './img/Icon2.png';
import icon3 from './img/Icon3.png';

import './Thrd.css'

export default function Thrd() {
  return (
    <>
    <div className="Thrd mt-5 d-flex flex-column justify-content-center align-items-center" >
    <div className="text-center text-white  container my-5">
      
      <h3 className='heading-font-r mb-3'>Why <span style={{color:"#4BE5CA",fontFamily:"Rowdies"}}> Learn </span>with our courses?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporidunt ut labore veniam...</p>
      
      <div className="d-inline-block mt-5 justify-content-center align-items-center">
        <div className="d-inline-block features-body">
          <img src={icon1} className='icon mb-3' alt="" />
          <h5 className='heading-font-r '>01. Learn</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporidunt ut labore veniam...</p>
        </div>
        <img src={linee} className='line' alt="" />
        <div className="d-inline-block features-body">
        <img src={icon2} className='icon mb-3' alt="" />
          <h5 className='heading-font-r '>02. Graduate</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporidunt ut labore veniam...</p>
        </div>
        <img src={linee} className='line' alt="" />
        <div className="d-inline-block features-body">
        <img src={icon3} className='icon mb-3' alt="" />
          <h5 className='heading-font-r'>03. Work</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporidunt ut labore veniam...</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
