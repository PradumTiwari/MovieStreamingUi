import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-28 absolute text-white bg-gradient-to-r from-black '>

     <h1 className='text-7xl font-bold'>{title}</h1>
     <p className='py-5 text-lg w-1/4 h-auto overflow-hidden '>{overview}</p>
     <div className=''>
          <button className='bg-slate-50 mx-2  text-slate-950 p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80 '><span className='m-2'>▶️</span>Play</button>
          <button className='bg-gray-500  text-white p-4 px-12 text-xl bg-opacity-40 rounded-lg '>More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle