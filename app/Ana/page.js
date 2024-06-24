import React from 'react';
import AgentsBox from '../components/AgentsBox';
import AgentsBoxSmall from '../components/AgentsBoxSmall';
import Link from 'next/link';

const Ana = () => {
    return (
        <>
            <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col gap-2" style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-[30%] p-4 lg:p-8">

                    <div>
                        <div className='text-white flex gap-5 items-center p-4 lg:p-[40px] text-lg'>
                            <img src="tie.svg" alt="" className='w-8 h-8 lg:w-auto lg:h-auto' />
                            <span className='text-white bold text-2xl'>HUMAOID AI</span>
                        </div>
                        <div className='px-4 lg:px-[40px] mt-5 italic'>
                            <p className='text-white text-[32px] lg:text-[56px] mb-4 leading-tight lg:leading-[80px] w-full lg:w-[440px]'>Select an agent Suitable for you</p>
                            <h1 className='text-white text-[80px] lg:text-[160px] italic'>NEED.</h1>
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
