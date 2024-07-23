import React from 'react'
// import PropertyCard from '../components/PropertyCard'
import Hero from '../components/Hero'
import Discover from '../components/Discover'
import PropertyC from '../components/PropertyC'
import { GiSettingsKnobs } from "react-icons/gi";

const Property = () => {
  return (
   <>
     <Hero />
    <div className=' w-full px-4 md:px-14 lg:px-24  pt-6 border space-y-4'>
    
        <div className="flex justify-between md:items-center  flex-col md:flex-row">
            <div className="flex flex-col md:flex-row gap-x-6 ">
                <div className="flex  items-center gap-2">
                <GiSettingsKnobs size={30}/>
                    <span className='text-[21px]'>More Filter</span>
                </div>
                <div className="">
                    <p className='text-[21px]'>Showing 1 – 10 of 15 results</p>
                </div>
            </div>
            <div className="space-x-4 flex justify-end items-center">
                <span className='text-[#717171] text-xl'>Sort by:</span>
            <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-[#181A20]    focus:outline-none font-medium text-[21px] py-2.5 text-center inline-flex items-center "
        type="button"
        
      >
        Default
        <svg
          className="w-4 h-4 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
            </div>
        </div>
        <PropertyC/>
        
    </div>
    <Discover/>
   </>
  )
}

export default Property