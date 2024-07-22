import React from 'react'
import Bg from '../Images/b-11.jpg (1).png'
import { BsCameraVideoFill } from "react-icons/bs";
import { GrLink, GrFavorite  } from "react-icons/gr";
import { FaRegImage } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import Bath from '../Images/Icon (1).png'
import Room from '../Images/Icon (2).png'

const PropertyCard = ({property}) => {
  return (
    <div className='border w-[336.33px] md:min-w-[386.33px] lg:min-w-[346.33px] h-[515.24px] md:h-[545.24px] lg:h-[525.24px] rounded-lg'>
         <div className="relative">
      {/* <img src={property.images.url} alt="Background"  /> */}
      {property.images && property.images.length > 0 && (
                <img src={property.images[0].url} alt={property.name} width="100" className="w-full h-auto rounded-t-lg"/>
            )}
      <div className="absolute top-0 left-0 p-5 flex flex-col gap-y-32 md:gap-y-[170px] lg:gap-y-32">
        <div className="flex justify-between gap-x-28 md:gap-x-40 lg:gap-x-28 mb-2">
          <span className="bg-[#3D9970] text-[#FFFFFF] text-[13px] font-medium rounded w-24 h-9 flex items-center justify-center">Featured</span>
          <span className="bg-[#878787B2] text-[#FFFFFF] text-[13px] font-medium  w-24 h-9 flex items-center justify-center rounded">{property.status}</span>
        </div>
        <div className="flex space-x-5 justify-end">
          <span className="bg-[#878787B2] w-[41.35px] h-[41.35px] flex items-center justify-center rounded-[9.19px]">
            <GrLink className="text-white text-xl" />
          </span>
          <span className="bg-[#878787B2] w-[41.35px] h-[41.35px] flex items-center justify-center rounded-[9.19px]">
            <BsCameraVideoFill className="text-white text-xl" />
          </span>
          <span className="bg-[#878787B2] w-[41.35px] h-[41.35px] flex items-center justify-center rounded-[9.19px]">
            <FaRegImage className="text-white text-xl" />
          </span>
        </div>
      </div>
    </div>
    <div className="px-8 pt-4">
        <div className="space-y-8">
            <div className="space-y-6">
                <div className="space-y-4">
                    <h3 className='font-semibold text-[#444444] text-[20.68px]'>{property.name}</h3>
                    <p className='flex text-[14.93px] gap-x-2 text-[#666666] items-center'><span><FaLocationDot className='text-base ' /></span>{property.location}</p>
                </div>
                <div className="flex gap-x-10 md:gap-x-7">
                    <div className="flex gap-x-1 md:gap-x-3">
                        <img src={Room} alt="" />
                        <span className='text-[#666666] '>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex gap-x-1 md:gap-x-3">
                        <img src={Bath} alt="" className=''/>
                        <span className='text-[#666666]'>{property.bathrooms} Bathrooms</span>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-t-[#E8E8E8] ">
                <div className="flex h-[63px] items-end justify-between">
                    <div className="">
                        <p className='text-[#373737] font-semibold text-[22px]'><span>{property.price}</span>/<span>{property.duration}</span></p>
                    </div>
                    <div className="flex justify-between items-end text-[#484848] w-[129.83px] h-[36.76px]">
                    <MdCompareArrows size={25}/><GoShareAndroid size={25}/><GrFavorite size={25} />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PropertyCard