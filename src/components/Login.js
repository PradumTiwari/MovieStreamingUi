import React, { useState,useRef } from 'react'
import Header from './Header'
import {checkValidate} from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();

  const [isSignIn,setIsSignIn]=useState(true);
  const [errorMessge,setErrorMessage]=useState('');
  
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleSignIn=(e)=>{
    e.preventDefault();
    setIsSignIn(!isSignIn);
  }

  const handlebuttonClick=(e)=>{
   
    e.preventDefault();
    const message= checkValidate(email.current.value,password.current.value);
    setErrorMessage(message);
     
    if(message!=='Valid'){
      return;
    }

    if(!isSignIn){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
    // Signed up 
       const user = userCredential.user;
       updateProfile(auth.currentUser, {
        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      })
     
       console.log('User signed up:', user);
    // ...
       })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
    // ..
  });
    }
    else{
        //Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          
          console.log('User signed in:', user);
        })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
  });
    }
  }

  return (
    <div>
      <Header/>
    <div className='absolute w-full h-screen '>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg-img" className='h-full w-full object-cove' />
    </div>
    <div >
      <form className=' text-slate-50  absolute bg-black w-[30%] h-3/6  my-56 mx-auto bg-opacity-55 left-0 right-0' >
      <h1 className='text-slate-50 relative text-5xl pb-7 pt-10 pl-8 m-2 font-bold'>{isSignIn?"Sign In":"Sign Up"}</h1>
      {isSignIn?null: <input ref={name} className='bg-slate-700 w-2/3 h-11 p-2 m-2 rounded-lg '  placeholder='userName'></input>}
        <input ref={email} className='w-2/3  justify-center h-11 rounded-lg m-2 bg-slate-700 ' type="text" placeholder='Email Address' />
       <input ref={password} type="password" className='relative w-full h-11 rounded-lg m-2 bg-slate-700 ' placeholder='Password' />
        <button className='rounded-xl bg-red-800 p-2 m-2' onClick={handlebuttonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
        <p className='text-red-800 font-bold'>{errorMessge}</p>
        <p className='text-slate-200'>{isSignIn?"New to Netflix":"" }  
        <button className='rounded-xl p-2 font-semibold' onClick={handleSignIn}> {isSignIn? "Sign Up":"SignIn"}</button>
        </p>
      </form>
    </div>
    </div>
  )
}

export default Login