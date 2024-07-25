import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import {  signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import {toggleGptSearchView} from '../utils/gptSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user);
  const gptSearch=useSelector(state=>state.gpt.showGptSearch);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate('/');
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    });
  
  }

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());

  }
  useEffect(()=>{
   const unsubcribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
       
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        // As soon As the User login 
        //we will navigate the user to another page
        navigate('/browse');

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
  //Unsubcribe when component is unmount 
    return ()=>unsubcribe();

  },[])
  return (
    <div className='flex justify-between absolute w-screen   px-8 py-2 bg-gradient-to-b from-black z-10 flex-col md:flex-row'>
    <img className='w-44 mx-auto md:mx-0' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
    
   
    {user&&(
    <div className='flex items-center'>
      <div> <button onClick={handleGptSearchClick}  className='bg-purple-700 h-auto mt-2 mr-2 p-[12px] rounded-xl shadow-sm text-slate-100 font-semibold'>{gptSearch?"HomePage":"Gpt Search"}</button></div>
    
      <button onClick={handleSignOut} className='text-white bg-red-600 px-6 mt-2 py-3 rounded-lg shadow-lg'>Sign Out</button>
      </div>
      )}
     
     
    </div>
  )
}

export default Header