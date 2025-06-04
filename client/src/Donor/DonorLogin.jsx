import React, { useState } from 'react';
import '../Donor/donor.css';
import DonorReg from './DonorReg';
import { useForm } from "react-hook-form"

function DonorLogin({ setdonorLogin }) {

  const [showRegister, setShowRegister] = useState(false);
  const { register,handleSubmit} = useForm()

  const closeAll = () => {
    setdonorLogin(false);
    setShowRegister(false);
  };

  const submitForm = (e) => {
    console.log(e)
  }

  return (
    <>
      <div className="overlay">
        {!showRegister ? (
          <div className="login-container">
            <button className="close-btn" onClick={closeAll}>×</button>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className='form-group'>
                <input type="email" placeholder='Email' {...register('email',{required:true})} />
              </div>
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
