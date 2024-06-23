import React from 'react'
import AgentsBox from '../components/AgentsBox'
import Link from 'next/link'

const Jhon = () => {

    return (
        <>
            <div className="h-screen  bg-cover bg-center bg-no-repeat flex flex-col gap-2 " style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
                <div className='flex gap-[30%]'>

                    <div>
                        <div className='text-white flex gap-5 items-center p-[40px] text-lg'>
                            <img src="tie.svg" alt="" />
                            <span className='text-white bold text-2xl'>HUMAOID AI</span>
                        </div>
                        <div className='px-[40px] mt-5 italic'>
                            <p className='text-white text-[56px] mb-4 leading-[80px] w-[440px]'>Select an agent Suitable for you</p>
                            <h1 className='text-white text-[160px] italic'>NEED.</h1>
                        </div>

                    </div>

                    <Link href={"/Playground"} className='mt-[80px]'>
                      
                        <AgentsBox imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
                    </Link>



                </div>

                <div className="slider self-center flex gap-2">

                    <Link href='/Jhon' className="h-[12px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500" style={{ width: `200px` }}></Link>

                    <Link href='/Ana' className='h-[12px] rounded-full bg-transparent border border-white w-[50px]'></Link>
                    <div className='h-[12px] rounded-full bg-transparent border border-gray-200 w-[20px]'></div>

                </div>


            </div>


        </>
    )

}

export default Jhon


export const metadata = {
    title: "Humaiod AI - Agents",
    description: "Select an agent Suitable for you",
  };