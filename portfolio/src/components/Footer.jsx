import React from 'react'
import Gallery1 from '../assets/Gallery 1.jpg'
import Gallery2 from '../assets/Gallery 2.jpg'
import Gallery3 from '../assets/Gallery 3.jpg'
import Gallery4 from '../assets/Gallery 4.jpg'

function Footer() {
  return (
    <>
    <div className="bg-dark text-light mt-5 py-5">
<div className="container">
  <div className="row">
    <div className="col-md-3">
      <h4>CRYSTAL SHIPMENT</h4>
      <p>Crystal Shipment Services is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.</p>

    </div>
    <div className="col-md-3">
      <h4>OUICK LINKS</h4>
      <ul className='list-unstyled'>
        <li><a href="#" className='text-light text-decoration-none'>Land Freight</a></li>
        <li><a href="#" className='text-light text-decoration-none'>Sea Freight</a></li>
        <li><a href="#" className='text-light text-decoration-none'>Air Freight</a></li>
      </ul>

    </div>
    <div className="col-md-3">
      <h4>PHOTO GALLERY</h4>
    <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
            <img src={Gallery1} alt="" className='img-fluid rounded'/>
            </div>
            <div className='flex-grow-1 ms-2'>
            <img src={Gallery2} alt=""className='img-fluid rounded'/>
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
            <img src={Gallery3} alt="" className='img-fluid rounded'/>
            </div>
            <div className='flex-grow-1 ms-2'>
            <img src={Gallery4} alt=""className='img-fluid round'/>
            </div>
          </div>
    </div>
    <div className="col-md-3">
      <h4>OUR NEWSLETTER</h4>
      <p>Sign up today for tips and latest news and exclusive special offers.cd portfolio</p>
      <input type="email" className='form-control nb-3 mt-3' placeholder='Enter your email here'/>
      <button className='btn btn-danger mt-2'>Subnit</button>

    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Footer