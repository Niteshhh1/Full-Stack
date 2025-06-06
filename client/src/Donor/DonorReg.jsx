import React, { useState } from 'react'
import '../Donor/donor.css';
import { useForm } from "react-hook-form"
import axios from 'axios';

function DonorReg({onClose}) {

   const [duplicate, setduplicate] = useState('')
   const { register,handleSubmit,formState:{errors,isSubmitting}} = useForm()

   const submitForm = async (data) => {
      try {
        const response = await axios.post('http://localhost:5000/api/register',data);
        if(response.status==409)
        setduplicate('')
      } catch (error) {
          if (error.response && error.response.status === 409) {
          setduplicate("User already registered");
        } else {
          console.log("Something went wrong:", error);
          setduplicate("Something went wrong. Try again.");
        }
      }
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
                 {...register('fullname',{required:true,
                  pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "Only alphabets and spaces allowed"
                }})}
                 />
              {errors.fullname && <p className="error-msg">{errors.fullname.message || "Name is Required"}</p>}
            </div>
            <div className='form-group'>
              <input type="email" 
                     placeholder='Email'
                     {...register('email',{required:true, pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address"
              }})} 
              />
              {errors.email && <p className="error-msg">{errors.email.message || "Email is Required"}</p>}
            </div>
            <div className='form-group'>
              <input type="number" placeholder='Contact'  {...register('contact',{required:true,minLength:{value:10,message:"Please enter valid contact number"}})} />
              {errors.contact && <p className="error-msg">{errors.contact.message||"Contact is Required"}</p>}
            </div>
            <div className='form-group'>
              <input type="text" placeholder='Address'  {...register('address',{required:true,pattern: {
                                value: /^[A-Za-z ]+$/,
                                message: "Only alphabets and spaces allowed"
               }})}  />
              {errors.address && <p className="error-msg">{errors.address.message ||"Address is Required"}</p>}
            </div>
            <div className='form-group'>
              <input type="text" placeholder='City'  {...register('city',{required:true ,pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "Only alphabets and spaces allowed"
                }})}  />
              {errors.city && <p className="error-msg">{errors.city.message || "City is Required"}</p>}
            </div>
            <div className='form-group'>
              <select
                    {...register("bgroup", { required: "Please select a blood group" })}
                  >
                    <option value="">-- Select Blood Group --</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
              {errors.bgroup && <p className="error-msg">{errors.bgroup.message ||"Blood Group is Required"}</p>}
            </div>
            <button disabled={isSubmitting} className="submit-btn">{isSubmitting?'Registering..':'Register'}</button>
          </form>
          {duplicate && <p className="error-msg">{duplicate}</p>}
        </div>
      </div>
    </>
  )
}

export default DonorReg