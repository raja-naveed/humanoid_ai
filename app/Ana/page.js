
import React from 'react';
import AgentsBox from '../components/AgentsBox';
import AgentsBoxSmall from '../components/AgentsBoxSmall';
import Link from 'next/link';

const Ana = () => {
    return (
        <>
            <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col gap-2" style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
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


                        <Link href={"/Jhon"} >
                            <div className='ml-4 lg:ml-[40px]'>
                                <AgentsBoxSmall imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
                            </div>
                        </Link>
                    </div>

                    <Link href={"/Playground"} className='mt-10 lg:mt-[80px]'>
                        <AgentsBox imgUrl={"Ana.png"} name={"Ana."} jobType={"HR Manager"} />
                    </Link>
                </div>

                <div className="slider self-center flex gap-2 mt-4 lg:mt-0">
                    <Link href='/Ana' className="h-[12px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500" style={{ width: `200px` }}></Link>
                    <Link href='/Jhon' className='h-[12px] rounded-full bg-transparent border border-white w-[50px]'></Link>
                    <div className='h-[12px] rounded-full bg-transparent border border-gray-200 w-[20px]'></div>
                </div>
            </div>
        </>
    )
}

export default Ana;

export const metadata = {
    title: "Humanoid AI - Agents",
    description: "Select an agent suitable for you",
};
