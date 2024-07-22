import React from 'react';
import Slider from 'react-slick';
import { FaLocationDot, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { discover } from '../db/Discoverdb';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Discover = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='h-full px-10 md:px-12 w-full py-12 '>
      <div className="">
        <h1 className='text-center text-3xl md:text-5xl font-semibold mb-8'>Discover Our Popular Properties</h1>
        <Slider {...settings} className=''>
          {discover.map((property, index) => (
            <div key={index} className="relative m-4">
              <div className="h-[412px] w-[280px] rounded-lg">
                <img src={property.image} alt="" className='object-cover h-full w-full rounded-lg'/>
              </div>
              <div className="absolute top-[200px] left-0 h-[212px]  w-[280px] text-[#FFFFFF] flex flex-col justify-end rounded-b-lg"  >
                <div className="bg-[#4A4A4C33] space-y-2 pl-4 pb-4">
                  <div className="font-semibold text-lg space-y-2">
                    <p>Semi Detached Duplex</p>
                    <span>{property.price}</span>
                  </div>
                  <div className="text-sm">
                    <span className='pr-2'>{property.bed} Bed</span>
                    <span className='border-r border-l px-2'>{property.bath} Bath</span>
                    <span className='px-2'>720 sq ft</span>
                  </div>
                  <div className="flex gap-x-[11px] items-center">
                    <FaLocationDot />
                    <span className='text-[14.79px]'>{property.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={className}
      style={{ ...style, display: "block", color: "#000" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{ ...style, display: "block", color: "#000" }}
      onClick={onClick}
    />
  );
};

export default Discover;
