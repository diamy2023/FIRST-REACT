import React from 'react'
import Card2 from './Card2'
import Cartons from '../assets/Cartons.jpg'

function Service() {
  return (
    <>
      <div className="service"> 

    <div className="text-center">
      <h1 className='pt-5'>Service</h1>
      <p>Home <i className="fa fa-arrow-right ms-3 mt-3"></i> service</p>
    </div>
    
  </div>
  <div className="container mt-5">
<Card2/>
<div className="row">
  <div className="col-md-6" data-aos="fade-up" >
<img src={Cartons} alt="" className='img-fluid'/>
  </div>
  <div className="col-md-6" data-aos="fade-up" >
      <h2>THE COMPLETE SOIUTION</h2>
      <div className="bg-red"></div>
      <p className='mt-3'>Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>
  </div>
</div>
  </div>
  
  </>
  )
}

export default Service