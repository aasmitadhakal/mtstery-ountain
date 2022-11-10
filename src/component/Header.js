import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import Ourservice from './Ourservice';
import Package from './Package';
import { FiInstagram  } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

function Header() {
  return (
    <>
    <div>
    <div className='md:bg-yellow-500 md:p-2  md:flex md:justify-between md:text-white   hidden md:block'>
      <div className='flex space-x-8'>
        <span><BsFacebook/></span>
        <span><FiInstagram /></span>
        <span><AiOutlineTwitter /></span>
      </div>
      <div className='flex' >
        <div>info@mysticmountainadventure.com</div>
        <div>Whatsapp / Viber +977-9861588883 (Urken)</div>
      </div>
      </div>
      <Navbar />
      <Slider />
      <div className='bg-yellow-500 p-4 flex'>
      <div><span className=' bg-red-500 p-4  text-white'>Notice</span></div>
      <div className='font-bold text-xl text-white'><marquee>Enjoy holidays with our wonderful packages. | Check our packages through website. |</marquee></div>
      </div>
      <div className='mt-4 mb-4 p-4'>
      <div className=' text-4xl font-bold mt-2 text-center' >Our service</div>
      <div className='text-center '>Here are our services</div>
      </div>
      <Ourservice />
      <div className='flex justify-around mt-4'>
        <div className='text-2xl font-bold bg-blue-700 w-full text-center text-white mt-2 mb-2 p-2'>ABOUT MAJESTIC MOUNTAIN & TOUR</div>
        <div className='text-2xl font-bold bg-yellow-500 w-full text-center text-white  mt-2 mb-2 p-2'>WHY TRAVEL WITH US?</div>
      </div>
      <Package />
      </div>
    </>
  )
}
export default Header