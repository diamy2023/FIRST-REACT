import React from 'react'
import Call from '../assets/Call.jpg'
import SMS from '../assets/Call.jpg'
import Sup from '../assets/Sup.jpg'
import Form from './Form'


function Contact() {
  return (
    <>
    <div className="contact">
    <div className="text-center">
      <h1 className='pt-5'>Contact</h1>
      <p>Home <i className="fa fa-arrow-right ms-3 mt-3"></i>Contact</p>
    </div>
    </div>

    <div className="container mt-5">
<div className="row">
  <div className="col-md-6"  data-aos="fade-up">
    <h4>Kindly call us or join our support group on WhatsApp.</h4>
  <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
            <img src={Call} alt=""/>
            </div>
            <div className='flex-grow-1 ms-2'>
            <span>+234 9072211222</span>
            
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
            <img src={Sup} alt=""/>
            </div>
            <div className='flex-grow-1 ms-2'>
            <span>+234 8167000077</span>
            
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
            <img src={SMS} alt=""/>
            </div>
            <div className='flex-grow-1 ms-2'>
            <span>info@crystalshipment.com</span>
            
            </div>
          </div>
  </div>
  <div className="col-md-6"  data-aos="fade-up">
  <Form/>
  </div>
  
</div>
  </div>
    </>
  )
}

export default Contact