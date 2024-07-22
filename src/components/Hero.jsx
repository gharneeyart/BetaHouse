import React from 'react'

const Hero = () => {
  return (
    <div className='herobg h-[680px] flex flex-col justify-center items-center w-full'>
        <div className="flex flex-col justify-center items-center gap-y-14 w-[1158px] md:mx-12 mt-40 md:mt-12 ">
            <div className="w-[988px] text-center flex flex-col justify-center items-center text-[#FFFFFF] gap-y-6">
                <h1 className='font-bold text-3xl md:text-[68px]'>Browse Our Properties</h1>
                <p className='text-xl w-[350px] md:text-[26px] text-center md:w-[784px]'>Find your perfect home among our curated properties. Start browsing now!</p>
            </div>
            <div className="h-96 md:h-[135px] w-[336px] md:w-[800px] lg:w-[1030px] bg-[#FFFFFF33] flex justify-center items-center mb-20 md:mb-0">
                <div className="w-[316px] md:w-[700px] lg:w-[980px] h-80 md:h-[85.74px] rounded-lg bg-[#FFFFFF] flex flex-col md:flex-row items-center justify-center ">
                    <div className="flex flex-col w-[297px] justify-center items-center md:my-5 my-3">
                        <label htmlFor="" className='font-semibold text-sm'>LOCATION</label>
                        <input type="text" placeholder='eg. Gbagada' className='text-center outline-none'/>
                    </div>
                    <div className="flex flex-col w-[297px] justify-center items-center md:border-x border-[#CAD4DE] border-y md:border-y-0 md:my-5 py-3">
                        <label htmlFor="" className='font-semibold text-sm'>PROPERTY TYPE</label>
                        <input type="text" placeholder='eg. Duplex, Bedroom Flat' className='text-center outline-none'/>
                    </div>
                    <div className="flex flex-col w-[297px] justify-center items-center md:my-5 my-4">
                        <label htmlFor="" className='font-semibold text-sm mb-2 '>BEDROOM</label>
                        <div className="w-[104px] flex justify-between">
                            <span className='h-5 w-5 rounded-full border border-[#30343B] flex justify-center items-center'>-</span>
                            <input type="text" placeholder='0' className='w-2.5 outline-none'/>
                            <span className='h-5 w-5 rounded-full border border-[#30343B] flex justify-center items-center'>+</span>
                        </div>
                    </div>
                    <button className='bg-[#3D9970] text-[#FFFFFF] w-[279px] text-xl rounded-lg md:rounded-l-none md:rounded-r-lg p-4 md:py-7'> Find Property</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero