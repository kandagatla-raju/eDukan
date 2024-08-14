import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptiopbox'>
        <div className='descriptionbox-navigator'>
      <div className='description-nav-box'>Description</div>
      <div className='description-nav-box.fade'>Reviews(122)</div>
    </div>
    <div className='descriptionbox-description'>
        <p>ECOMS is an e-commerce website for cloths.</p>
        <p>
            Shop the latest collection at low prices
        </p>
    </div>
    </div>
  )
}

export default DescriptionBox
