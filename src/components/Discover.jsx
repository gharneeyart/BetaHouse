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
    <div className='px-4 md:px-8 lg:px-12 w-full py-12 border'>
      <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-8'>Discover Our Popular Properties</h1>
      <Slider {...settings}>
        {discover.map((property, index) => (
          <div key={index} className="relative p-2">
            <div className="h-64 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden">
              <img src={property.image} alt="" className='object-cover h-full w-full rounded-lg'/>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-b-lg text-white p-4">
              <div className="font-semibold text-lg space-y-1">
                <p>Semi Detached Duplex</p>
                <span>{property.price}</span>
              </div>
              <div className="text-sm">
                <span className='pr-2'>{property.bed} Bed</span>
                <span className='border-r border-l px-2'>{property.bath} Bath</span>
                <span className='px-2'>720 sq ft</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <span>{property.location}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
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
