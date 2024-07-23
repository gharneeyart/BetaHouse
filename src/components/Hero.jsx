import React, {useState} from 'react';

const Hero = () => {
  const [bedrooms, setBedrooms] = useState(0);

  const handleIncrement = () => {
    setBedrooms(bedrooms + 1);
  };

  const handleDecrement = () => {
    if (bedrooms > 0) {
      setBedrooms(bedrooms - 1);
    }
  };
  return (
    <div className="herobg h-[680px] flex flex-col justify-center items-center gap-y-14 md: w-full pt-32 md:pt-12">
      <div className="w-full max-w-[988px] text-center flex flex-col justify-center items-center text-[#FFFFFF] gap-y-6 px-4">
        <h1 className="font-bold text-3xl md:text-[68px]">Browse Our Properties</h1>
        <p className="text-xl w-full max-w-[350px] md:text-[26px] md:max-w-[784px]">Find your perfect home among our curated properties. Start browsing now!</p>
      </div>
      <div className="w-full max-w-[1030px] bg-[#FFFFFF33] flex justify-center items-center mb-20 md:mb-0 md:px-6 md:py-6 py-3 px-3">
        <div className="w-full max-w-[980px] bg-[#FFFFFF] rounded-lg flex flex-col md:flex-row items-center justify-center py-4 md:py-0">
          <div className="flex flex-col w-full max-w-[297px] justify-center items-center md:my-5 my-3 px-4">
            <label htmlFor="" className="font-semibold text-sm">LOCATION</label>
            <input type="text" placeholder="eg. Gbagada" className="text-center outline-none w-full" />
          </div>
          <div className="flex flex-col w-full max-w-[297px] justify-center items-center md:border-x border-[#CAD4DE] border-y md:border-y-0 md:my-5 py-3 px-4">
            <label htmlFor="" className="font-semibold text-sm">PROPERTY TYPE</label>
            <input type="text" placeholder="eg. Duplex, Bedroom Flat" className="text-center outline-none w-full" />
          </div>
          <div className="flex flex-col w-full max-w-[297px] justify-center items-center md:my-5 my-4 px-4">
            <label htmlFor="" className="font-semibold text-sm mb-2">BEDROOM</label>
            <div className="w-full max-w-[104px] flex justify-between items-center">
              <span className="h-5 w-5 rounded-full border border-[#30343B] flex justify-center items-center" onClick={handleDecrement}>-</span>
              <input type="text" placeholder="0" value={bedrooms} readOnly className="w-2.5 outline-none text-center" />
              <span className="h-5 w-5 rounded-full border border-[#30343B] flex justify-center items-center" onClick={handleIncrement}>+</span>
            </div>
          </div>
          <button className="bg-[#3D9970] text-[#FFFFFF] w-full max-w-[279px] text-xl rounded-lg md:rounded-l-none md:rounded-r-lg py-4 md:py-10 px-5">Find Property</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
