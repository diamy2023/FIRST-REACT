import React from 'react'
import Air from '../assets/Air.jpg'
import Sea from '../assets/Sea.jpg'
import Land from '../assets/Land.jpg'
import Worker from '../assets/Worker.jpg'
import Man from '../assets/Man.jpg'
import Tractor from '../assets/Tractor.jpg'

function Card2() {
  const cardData = [
    {image:Air, title:'Air Frieght', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...' },
    {image:Sea, title:'Sea Frieght', content:'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...' },
    {image:Land, title:'Land Frieght', content:'Cargo are transported at some stage of their journey along the world’s roads where we give...' },
    {image:Worker,title:'Warehousing', content:'Package and store your things effectively and securely to make sure them in storage, have certif...'},
    {image:Man, title:'Door to Door Delivery', content:'Our expertise in transport management and planning allows us to design a solution. hand...Read more'},
    {image:Tractor, title:'Packaging & Storage', content:'Package and store your things effectively and securely to make sure them in storage, We... Read more'},
  ]
  return (
    <>
    <div className="row">
      {cardData.map((Card, index) =>(
        <div className="col-md-4 mb-5">
    <div className="card">
<img src={Card.image} className="card-img-top" alt="..."/>
<div className="card-body">
  <h4 className="card-title">{Card.title}</h4>
  <p className="card-text">{Card.content}<a href="" className='text-danger text-decoration-none'>Read more</a> </p>
</div>
</div>
    </div>
      ) )}
    
    
    
  </div>
  </>
  )
}

export default Card2