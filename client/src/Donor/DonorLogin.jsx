import React, { useState } from 'react';
import '../Donor/donor.css';
import DonorReg from './DonorReg';
import { useForm } from "react-hook-form"
import axios from 'axios'

function DonorLogin({ setdonorLogin }) {

  const [showRegister, setShowRegister] = useState(false);
  const { register,handleSubmit,formState:{errors}} = useForm()
  const [duplicate,setduplicate] = useState('');

  const closeAll = () => {
    setdonorLogin(false);
    setShowRegister(false);
  };

  const submitForm = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login',data);
      console.log(response.data.user);
      setduplicate('');
    } catch (error) {
       if(error.response.status==404)
        setduplicate("User not found");
    }
  }

  return (
    <>
      <div className="overlay">
        {!showRegister ? (
          <div className="login-container">
            <button className="close-btn" onClick={closeAll}>×</button>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className='form-group'>
                <input type="email" placeholder='Email' {...register('email',{required:true,pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address"
              }})} />
                {errors.email && <p className="error-msg">{errors.email.message ||"Email is Required"}</p>}
              </div>
              {duplicate && <p className="error-msg">{duplicate}</p>}
              <button className="submit-btn">Login</button>
            </form>
            <p className="register-text">
              Don’t have an account?
              <button onClick={() => setShowRegister(true)} className="register-btn">Register</button>
            </p>
          </div>
        ) : (
          <DonorReg onClose={closeAll} />
        )}
      </div>
    </>
  );
}

export default DonorLogin;
