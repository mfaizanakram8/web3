import React from 'react'
import './back.css'

function index({ onClick }) {
  return (
    <div>
       <div onClick={onClick} className='back-circle-arrow-container1'>
                <img src="/assets/BackLogoCircle.png" alt="CircleBackArrow" className='circle-back-arrow1' />
                <h2 className='primary-back-text' >Back</h2>
            </div>
    </div>
  )
}

export default index
