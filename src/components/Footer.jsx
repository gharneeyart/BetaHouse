import React from 'react'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className='bg-[#035A33] flex flex-col '>
        <div className="flex flex-col md:flex-row gap-6 md:gap-x-24 my-8 md:my-[86.33px] mx-4 md:mx-8  lg:mx-[64px] md:h-[253px]">
            <div className="w-full md:w-[310px] lg:w-[379px] space-y-6">
                <div className="flex items-center">
                    <span className='bg-[#3D9970] font-bold text-[21.59px] rounded-full p-1.5 mr-3 text-white'>BH</span>
                    <span className='font-medium text-[25.91px] text-white'>BetaHouse</span>
                </div>
                <p className='text-white text-lg'>Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!</p>
           
                <div className="space-y-4">
                    <div className="flex items-center gap-x-5">
                        <FaLocationDot className='text-base text-white' />
                        <span className='text-lg text-white'>95 Tinubu Estate, Lekki, Lagos</span>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <FaPhone className='text-base text-white' />
                        <span className='text-lg text-white'>+234 675 8935 675</span>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <HiMail className='text-base text-white' />
                        <span className='text-lg text-white'>support@rentbetahouse.com</span>
                    </div>
                </div>
            </div>
            <div className="text-white flex flex-col md:flex-row gap-8 md:gap-x-8 lg:gap-x-28">
                <div className="space-y-4">
                    <h4 className='font-semibold text-[23px]'>Quick Links</h4>
                    <ul className='text-lg space-y-4'>
                        <li><a href="" >Home</a></li>
                        <li><a href="">Properties</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className='font-semibold text-2xl'>More</h4>
                    <ul className='text-lg space-y-4'>
                        <li><a href="">Agents</a></li>
                        <li><a href="">Affordable Houses</a></li>
                        <li><a href="">FAQ’s</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className='font-semibold text-2xl'>Popular Search</h4>
                    <ul className='text-lg space-y-4'>
                        <li><a href="">Apartment for sale</a></li>
                        <li><a href="">Apartment for rent</a></li>
                        <li><a href="">3 bedroom flat</a></li>
                        <li><a href="">Bungalow</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="border-t border-[#6F6F6F] p-8 flex justify-center">
            <div className='text-white flex flex-col md:flex-row w-full md:w-[996px] justify-between items-center'>
                <p className='text-center md:text-left'>Copyright 2023 Betahouse | Designed by Michael.fig</p>
                <a href="" className='mt-2 md:mt-0'>Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
