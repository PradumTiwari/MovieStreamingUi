import React from 'react'
import {removeUser} from "../utils/userSlice";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import Header from './Header';
const Browse = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate('/');
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    });
  
  }


  return (
    <div className='w-full'>
      <div className='h-16 border-slate-600'> {/* Adjust height for Header */}
        <Header />
      </div>
      <div className=''>
        <div className='text-2xl'>Browse</div> {/* Corrected CSS class for text */}
      </div>
      <button
        className='bg-red-600 text-2xl m-2   rounded-xl'
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Browse