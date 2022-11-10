import React from 'react'
import {BsClock  } from 'react-icons/bs';
function Package() {
  return (
    <>
     <div className='mt-4 mb-4 p-8'>
      <div className=' text-4xl font-bold mt-2 text-center' >Our Package</div>
      <div className='text-center '>Here are our services</div>
      </div>
    <div className='flex justify-around'>
    <div className='rounded shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '>
<img src='h.jpeg' alt=''></img>
<div className='flex  justify-between p-4 text-2xl bg-gray-100 font-bold'>
    <span>Honeymoon pack in Nepal</span>
    <span><BsClock /></span>
</div>
    </div>
   {/* for next */}
   <div className='rounded shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
<img src='h.jpeg' alt=''></img>
<div className='flex justify-between p-4 text-2xl bg-gray-100 font-bold'>
    <span>Honeymoon pack in Nepal</span>
    <span><BsClock /></span>
</div>
    </div>
    {/* for container */}
    <div className='rounded shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
<img src='h.jpeg' alt=''></img>
<div className='flex  justify-between p-4 text-2xl bg-gray-100 font-bold'>
    <span>Honeymoon pack in Nepal</span>
    <span><BsClock /></span>
</div>
    </div>
    </div>
    </>
  )
}

export default Package