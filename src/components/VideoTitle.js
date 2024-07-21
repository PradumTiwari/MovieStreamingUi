import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-40 px-12 '>

     <h1 className='text-7xl font-bold'>{title}</h1>
     <p className='py-5 text-lg w-1/4'>{overview}</p>
     <div className=''>
          <button className='bg-gray-500 mx-2 text-white p-4 px-12 text-xl bg-opacity-40 rounded-lg '><span className='m-2'>▶️</span>Play</button>
          <button className='bg-gray-500  text-white p-4 px-12 text-xl bg-opacity-40 rounded-lg '>More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle