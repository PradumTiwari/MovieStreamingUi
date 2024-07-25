import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[9%] flex justify-center '>
      <form  className=' w-1/2  bg-black grid grid-cols-12'>
        <input type="text " className='p-4 m-4 col-span-9' placeholder='What would you like to watch Today' />
        <button className='py-2 px-4 m-4 bg-red-600 col-span-3 text-white rounded-xl'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar