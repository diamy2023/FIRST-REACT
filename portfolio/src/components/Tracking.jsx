import React from 'react'

function Tracking() {
  return (
    <>
    <div className="track">
    <div className="text-center">
      <h1 className='pt-5'>Tracking</h1>
      <p>Home <i className="fa fa-arrow-right ms-3 mt-3"></i>Tracking</p>

    </div>
</div>
<div className="container mt-5">
<div className="row">
  <div className="col-md-6" data-aos="fade-up" >
  <h2>TRACK YOUR SHIPMENT</h2>
  <div className="bg-red"></div>
  <p>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.</p>
      
  </div>
  <div className="col-md-6"  data-aos="fade-up">
  <input type="email" className='form-control nb-3 mt-3' placeholder='Enter your tracking ID here'/>
      <button className='btn btn-danger mt-2' data-aos="fade-up" >Track</button>

  </div>
</div>
  </div>
  
  
    </>
  )
}

export default Tracking