import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'



const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

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
    <div className='absolute w-screen h-7  px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
    </div>
  )
}

export default Header