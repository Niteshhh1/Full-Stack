import React, { useState } from 'react'
import '../css/Landing.css'
import bloodIMG from '../../public/blood.png'
import { Link } from 'react-router-dom'
import DonorLogin from '../Donor/DonorLogin'

function Landing() {
  
  const [donorLogin, setdonorLogin] = useState(false)

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
         <button onClick={()=>setdonorLogin(true)} className='btn1'>I am a Donor</button>
         <button className='btn2'>I am a Patient</button>
       </div>
       {donorLogin && <DonorLogin setdonorLogin={setdonorLogin}/>}
    </>
  )
}

export default Landing