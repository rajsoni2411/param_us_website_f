import React from 'react'
import att from '../assets/ourclients/att.png'
import barnesnoble from '../assets/ourclients/barnesnoble.png'
import bluecross from '../assets/ourclients/bluecross.png'
import bowne from '../assets/ourclients/bowne.png'
import capitalone from '../assets/ourclients/capitalone.png'
import chubb from '../assets/ourclients/chubb.png'
import concentra from '../assets/ourclients/concentra.png'
import ericsson from '../assets/ourclients/ericsson.png'
import humana from '../assets/ourclients/humana.png'
import intuit from '../assets/ourclients/intuit.png'
import jpmorgan from '../assets/ourclients/jpmorgan.png'
import medco from '../assets/ourclients/medco.png'
import nyc from '../assets/ourclients/nyc.png'
import pfizer from '../assets/ourclients/pfizer.png'
import ravago from '../assets/ourclients/ravago.png'
import reckitt from '../assets/ourclients/reckitt.png'
import reckittben from '../assets/ourclients/reckittben.png'
import schering from '../assets/ourclients/schering.png'
import snpglobal from '../assets/ourclients/snpglobal.png'
import stanley from '../assets/ourclients/stanley.png'
import ubs from '../assets/ourclients/ubs.png'
import verizon from '../assets/ourclients/verizon.png'
import wachovia from '../assets/ourclients/wachovia.png'
import weightwatchers from '../assets/ourclients/weightwatchers.png'
const OurClients = () => {
    const imgArray1 = [
        { img: jpmorgan },
        { img: stanley },
        { img: wachovia },
        { img: capitalone },
        { img: snpglobal },
        { img: ubs },
        { img: intuit },
    ]
    const imgArray2 = [
        { img: chubb },
        { img: concentra },
        { img: reckitt },
        { img: reckittben },
        { img: humana },
        { img: bluecross },
    ]
    const imgArray3 = [
        { img: ericsson },
        { img: att },
        { img: verizon },
    ]
    const imgArray4 = [
        { img: schering },
        { img: medco },
        { img: pfizer },
    ]
    const imgArray5 = [
        { img: barnesnoble },
        { img: bowne },
        { img: weightwatchers },
        { img: ravago },
        { img: nyc },
        { img: snpglobal },
    ]
    return (
        <div className='our-clients w-full flex justify-center'>
            <div className="our-clients-inner w-[calc(100%_-_200px)]">

                {/* Background Image div */}
                <div className="font-faustina h-[440px] w-full mt-[60px] bg-home-bg rounded-[110px] text-white flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat">

                    <div className="bg-inner absolute inset-0 bg-gradient-to-r from-[#1FA2FF] from-[0%] via-25% to-[#A6FFCB] to-[70%] opacity-20 rounded-[110px]"></div>

                    <p className='font-bold text-[64px]'>Our Clients</p>
                    <p className='font-medium text-[32px]'>"Come Meet Our Clients Turned Into Friends"</p>

                </div>

                <div className="our-clients-content flex justify-center ">
                    <div className="mt-[60px]">
                        <h2>Financial</h2>

                        <div className="our-clients-img justify-center flex flex-wrap gap-5">
                            {/* Gradient for image */}
                            {imgArray1?.map((itm, i) => {
                                return (
                                    <div className="img-shadow relative">
                                        <div className="img-shadow-inner rounded-[15px] absolute w-[100%] h-[100%]  bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] opacity-0"></div>
                                        <div className="img-gradient bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] p-1 rounded-[15px] h-[240px] w-[415px]">
                                            <div className="jpmorgan bg-white bg-opacity-80 w-full h-full rounded-[15px] flex items-center justify-center">
                                                <img src={itm?.img} alt="" className='h-[300px] object-cover' />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="insurance mt-[60px]">
                            <h2>Insurance</h2>

                            <div className="our-clients-img justify-center flex flex-wrap gap-5">
                                {/* Gradient for image */}
                                {imgArray2?.map((itm, i) => {
                                    return (
                                        <div className="img-shadow relative">
                                            <div className="img-shadow-inner rounded-[15px] absolute w-[100%] h-[100%]  bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] opacity-0"></div>
                                            <div className="img-gradient bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] p-1 rounded-[15px] h-[240px] w-[415px]">
                                                <div className="jpmorgan bg-white bg-opacity-80 w-full h-full rounded-[15px] flex items-center justify-center">
                                                    <img src={itm?.img} alt="" className='h-[300px] object-cover' />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="telecom mt-[60px]">
                            <h2>Telecom</h2>

                            <div className="our-clients-img justify-center flex flex-wrap gap-5">
                                {/* Gradient for image */}
                                {imgArray3?.map((itm, i) => {
                                    return (
                                        <div className="img-shadow relative">
                                            <div className="img-shadow-inner rounded-[15px] absolute w-[100%] h-[100%]  bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] opacity-0"></div>
                                            <div className="img-gradient bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] p-1 rounded-[15px] h-[240px] w-[415px]">
                                                <div className="jpmorgan bg-white bg-opacity-80 w-full h-full rounded-[15px]  flex items-center justify-center">
                                                    <img src={itm?.img} alt="" className='object-cover' />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="pharmaceutical mt-[60px]">
                            <h2>Pharmaceutical</h2>

                            <div className="our-clients-img justify-center flex flex-wrap gap-5">
                                {/* Gradient for image */}
                                {imgArray4?.map((itm, i) => {
                                    return (
                                        <div className="img-shadow relative">
                                            <div className="img-shadow-inner rounded-[15px] absolute w-[100%] h-[100%]  bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] opacity-0"></div>
                                            <div className="img-gradient bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] p-1 rounded-[15px] h-[240px] w-[415px]">

                                                <div className="jpmorgan bg-white bg-opacity-80 w-full h-full rounded-[15px] flex items-center justify-center">
                                                    <img src={itm?.img} alt="" className='object-cover' />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="others mt-[60px]">
                            <h2>Others</h2>

                            <div className="our-clients-img justify-center flex flex-wrap gap-5">
                                {/* Gradient for image */}
                                {imgArray5?.map((itm, i) => {
                                    return (
                                        <div className="img-shadow relative">
                                            <div className="img-shadow-inner rounded-[15px] absolute w-[100%] h-[100%]  bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] opacity-0"></div>
                                            <div className="img-gradient bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] p-1 rounded-[15px] h-[240px] w-[415px]">

                                                <div className="jpmorgan bg-white bg-opacity-80 w-full h-full rounded-[15px] flex items-center justify-center">
                                                    <img src={itm?.img} alt="" className='w-[300px] object-cover' />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="img-shadow relative">
                                    <div className="img-shadow-inner rounded-[15px] absolute w-[100%] h-[100%]  bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] opacity-0"></div>
                                    <div className="img-gradient bg-gradient-to-r from-[#1FA2FF] via-cyan-300 to-[#A6FFCB] p-1 rounded-[15px] h-[240px] w-[415px]">

                                        <div className="jpmorgan bg-white text-black font-['Poppins'] text-[40px] font-bold flex justify-center items-center bg-opacity-80 w-full h-full rounded-[15px] ">
                                            <p>& Many More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OurClients
