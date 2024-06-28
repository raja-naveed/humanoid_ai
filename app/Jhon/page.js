// import React from 'react'
// import AgentsBox from '../components/AgentsBox'
// import Link from 'next/link'

// const Jhon = () => {

//     return (
//         <>
//             <div className="h-screen  bg-cover bg-center bg-no-repeat flex flex-col gap-4 md:gap-12 " style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
            
//                 <div className='flex  md:flex-row flex-col md:justify-start md:items-start justify-center items-center mr-4 md:gap-[10%] lg:gap-[30%]  '>

//                     <div>
//                         <div className='text-white flex gap-5 md:justify-start items-center md:p-[40px] pt-3 justify-center ml-5  md:text-lg'>
//                             <img src="tie.svg" alt="" />
//                             <span className='text-white bold text-2xl'>HUMAOID AI</span>
//                         </div>
//                         <div className=' flex flex-col sm:gap-10 xl:gap-20  justify-center items-center md:px-[40px] mt-5 italic'>
//                             <p className='text-white text-[20px]  md:text-[56px] md:mb-4 leading-[135%]  md:w-[440px] mb-5'>Select an agent Suitable for you</p>
//                             <h1 className='text-white md:text-8xl xl:text-[160px] text-4xl italic'>NEED.</h1>
//                         </div>

//                     </div>

                    
//                     <Link href={"/Playground"} className=' mt-5 md:mt-[80px]'>
                      
//                         <AgentsBox imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
//                     </Link>



//                 </div>

//                 <div className="slider self-center flex gap-2">

//                     <Link href='/Jhon' className="md:h-[12px] h-[8px] w-[100px] md:w-[200px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500" ></Link>

//                     <Link href='/Ana' className='md:h-[12px] h-[8px] rounded-full bg-transparent border border-white w-[50px]'></Link>
//                     <div className='md:h-[12px] h-[8px] rounded-full bg-transparent border border-gray-200 w-[20px]'></div>

//                 </div>


//             </div>


//         </>
//     )

// }

// export default Jhon


// export const metadata = {
//     title: "Humaiod AI - Agents",
//     description: "Select an agent Suitable for you",
//   };

"use client"
import React from 'react'
import AgentsBox from '../components/AgentsBox'
import AgentsBoxSmall from '../components/AgentsBoxSmall'
import Link from 'next/link'
import { useState } from 'react'

const Jhon = () => {
    const [active, setActive] = useState('Jhon');


    const handleClick = (link) => {
        setActive(link);
    };
    return (
        <>
            <div className="h-screen  bg-cover bg-center bg-no-repeat flex flex-col gap-4 md:gap-12 " style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
                {
                    active === "Jhon" ?
                        (<>  <div className='flex  md:flex-row flex-col md:justify-start md:items-start justify-center items-center mr-4 md:gap-[10%] lg:gap-[30%]  '>

                            <div>
                                <div className='text-white flex gap-5 md:justify-start items-center md:p-[40px] pt-3 justify-center ml-5  md:text-lg'>
                                    <img src="tie.svg" alt="" />
                                    <span className='text-white bold text-2xl'>HUMAOID AI</span>
                                </div>
                                <div className=' flex flex-col sm:gap-10 xl:gap-20  justify-center items-center md:px-[40px] mt-5 italic'>
                                    <p className='text-white text-[20px]  md:text-[56px] md:mb-4 leading-[135%]  md:w-[440px] mb-5'>Select an agent Suitable for you</p>
                                    <h1 className='text-white md:text-8xl xl:text-[160px] text-4xl italic'>NEED.</h1>
                                </div>

                            </div>


                            <Link href={"/Playground"} className=' mt-5 md:mt-[80px]'>
                                <AgentsBox imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
                            </Link>



                        </div></>) :
                        (<>
                                <div className="flex flex-col lg:flex-row gap-10 lg:gap-[30%]  md:gap-[10%] p-4 lg:p-2 ">

                                    <div>
                                        <div className='text-white flex gap-5 md:justify-start items-center md:p-[40px] pt-2  md:text-lg'>
                                            <img src="tie.svg" alt="" />
                                            <span className='text-white bold text-2xl'>HUMAOID AI</span>
                                        </div>
                                        <div className=' flex flex-col sm:gap-4 xl:gap-20 md:px-[40px] mt-1 italic'>
                                            <p className='text-white text-[20px]  md:text-[56px] md:mb-4 leading-[135%]  md:w-[440px] mb-5'>Select an agent Suitable for you</p>
                                            <h1 className='text-white md:text-8xl xl:text-[160px] text-4xl italic'>NEED.</h1>
                                        </div>


                                        <button onClick={() => handleClick('Jhon')}>
                                            <div className='ml-4 lg:ml-[40px]'>
                                                <AgentsBoxSmall imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
                                            </div>
                                        </button>
                                    </div>

                                    <Link href={"/Playground"} className='mt-10 lg:mt-[80px]'>
                                        <AgentsBox imgUrl={"Ana.png"} name={"Ana."} jobType={"HR Manager"} />
                                    </Link>
                                </div>
                            </>)
                }

                <div className="slider self-center flex gap-2">
                    <button className={`transition-all duration-500 md:h-[12px] h-[8px] rounded-full ${active === 'Jhon' ? 'w-[100px] md:w-[200px] bg-gradient-to-r from-purple-500 via-blue-500 to-green-500' : 'w-[50px] bg-transparent border border-white'
                        }`}
                        onClick={() => handleClick('Jhon')}>

                    </button>
                    <button className={`transition-all duration-500 md:h-[12px] h-[8px] rounded-full ${active === 'Ana' ? 'w-[100px] md:w-[200px] bg-gradient-to-r from-purple-500 via-blue-500 to-green-500' : 'w-[50px] bg-transparent border border-white'
                        }`}
                        onClick={() => handleClick('Ana')}>

                    </button>
                    <div
                        className="md:h-[12px] h-[8px] w-[20px] rounded-full bg-transparent border border-gray-200"
                    ></div>
                </div>

            </div>


        </>
    )

}

export default Jhon


