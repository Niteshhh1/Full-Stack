import React from 'react'
import { useForm } from 'react-hook-form'
import '../Patient/patient.css'

function PForm({setPatientForm}) {

  const {register,handleSubmit} = useForm();

  const submitForm = (e) => {
     console.log(e)
  }
  return (
    <>
      <div className="overlay">
        <div className="login-container">
          <button className='close-btn' onClick={()=>setPatientForm(false)}>×</button>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className='form-group'>
              <input 
                 type="text" 
                 placeholder='Full Name' 
                 {...register('fullname',{required:true})}
                 />
            </div>
            <div className='form-group'>
              <input type="text" 
                     placeholder='Hospital'
                     {...register('hospital',{required:true})} 
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
            <button className="submit-btn">Request</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PForm