import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestiion from './GptMovieSuggestiion'

const GptSearch = () => {
  
  return (
    <div>
      <div className='absolute w-full h-screen -z-10 '>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg-img" className='h-full w-full object-cove' />
    </div>
      <GptSearchBar/>
      <GptMovieSuggestiion/>
    </div>
  )
}

export default GptSearch