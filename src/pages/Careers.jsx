import React from 'react'

const Careers = () => {
    return (
        <div className='careers-container w-full flex justify-center'>
            <div className="careers-mini w-[calc(100%_-_200px)]">
                <div className="font-faustina h-[440px] w-full mt-[60px] bg-careers-bg rounded-[110px] text-white flex flex-col gap-4 justify-center items-center relative bg-cover bg-center bg-no-repeat right-2">
                    <div className="bg-inner absolute inset-0 bg-gradient-to-r from-[#1FA2FF] from-[0%] via-25% to-[#A6FFCB] to-[70%] opacity-20 rounded-[110px]"></div>
                    <p className='font-bold text-[64px]'>Come Work With Us</p>
                    <p className='font-medium text-[32px]'>"You Are Standing At The Door Of Opportunities, Explore Your Professional Journey With Us"</p>

                </div>
                <div className="careers-content flex justify-center ">

                </div>
            </div>
        </div>
    )
}

export default Careers
