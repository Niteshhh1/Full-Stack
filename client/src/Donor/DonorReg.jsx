import React from 'react'
import '../Donor/donor.css';
import { useForm } from "react-hook-form"

function DonorReg({onClose}) {

   const { register,handleSubmit} = useForm()

   const submitForm = (e) => {
      console.log(e);
   }

  return (
      <>
      <div className="overlay">
        <div className="login-container">
          <button onClick={onClose} className='close-btn'>×</button>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className='form-group'>
              <input 
                 type="text" 
                 placeholder='Full Name' 
                 {...register('fullname',{required:true})}
                 />
            </div>
            <div className='form-group'>
              <input type="email" 
                     placeholder='Email'
                     {...register('email',{required:true})} 
              />
            </div>
            <div className='form-group'>
              <input type="number" placeholder='Contact'  {...register('contact',{required:true})} />
            </div>
            <div className='form-group'>
              <input type="text" placeholder='Location'  {...register('location',{required:true})}  />
            </div>
            <div className='form-group'>
              <input type="text" placeholder='Blood Group'  {...register('group',{required:true})}  />
            </div>
            <button className="submit-btn">Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default DonorReg