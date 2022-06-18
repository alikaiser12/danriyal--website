import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#fff]'>
      {/*Container */}
      <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl flex justify-center text-[#050506]'> Danriyal Solutions</h1>
       
        <p className='mx-auto px-8 text-[#8892b0] py-4 max-w-[720px]'>Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum</p>
        <div>
          <button className='text-black group border-2 px-6 py-3 my-2 mx-auto px-8 flex items-center hover:bg-[#55dde2] hover:border-blue-600'>View Work 
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3'/>
          </span>
          
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home