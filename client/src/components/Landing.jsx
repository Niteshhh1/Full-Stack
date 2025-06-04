import React from 'react'
import '../css/Landing.css'
import bloodIMG from '../../public/blood.png'

function Landing() {
  return (
    <>
      <div className='land-first-div'>
        <h1>Blood Donation</h1>
      </div>
       <div className='land-second-div'>
          <h1>Choose Your Role</h1>
      </div>
       <div className='land-third-div'>
         <img className='land-img1' src={bloodIMG} alt="" />
       </div>
       <div className='land-fourth-div'>
         <button className='btn1'>I am a Donor</button>
         <button className='btn2'>I am a Patient</button>
       </div>
    </>
  )
}

export default Landing