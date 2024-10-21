import React from 'react'
import './LogoBack.css'

const LogoBack = ({ onClick }) => {
    return (
        <div>
            <h2 className='LogoStyle'>Logo</h2>

            <div className='arrow-back-section' onClick={onClick}>
                <img src='/assets/BackArrow.png' width={10} height={18} className='arrow-back-img' />
                <p className='back-text'>Back</p>
            </div>
        </div>
    )
}

export default LogoBack