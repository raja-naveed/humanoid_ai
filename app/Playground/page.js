"use client"
import React from 'react'
import NavBar from '../components/NavBar'
import AgentsBoxSmall from '../components/AgentsBoxSmall'
import Link from 'next/link'
import { useState } from 'react'

const Playground = () => {

  const [text, setText] = useState('Write a tagline on ice cream shop...');

  // Handle the change in the text area
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Reset the text area
  const handleReset = () => {
    setText('');
  };


  return (
    <div>
    <div className="h-screen  bg-cover bg-center bg-no-repeat flex flex-col gap-14 " style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
      <NavBar />

      <div className="flex mt-12">
        <div className="first mx-[65px] flex flex-col gap-20 w-1/3">
          <AgentsBoxSmall imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
          <div className='text-white flex flex-col gap-7 italic'>
            <Link href={'/Playground'} className='text-[45px]'>Playground</Link>
            <Link href={'/DataSetup'} className='text-[#9e9c9cac] text-[26px]'>Data Setup</Link>
            <Link href={'/IntegrationSetting'} className='text-[#9e9c9cac] text-[26px]'>Integration Setting</Link>
          </div>
        </div>

        <div className="second flex flex-col gap-12 text-white bg-[#8985851c] p-7 rounded-3xl w-full mr-[65px]">

          <div className="flex w-full justify-between">
            <h3 className="text-4xl italic">Playground</h3>
            <div className="buttons flex gap-3">

              <select id="model" className='bg-transparent w-[220px] border rounded-lg px-2 py-1'>
                <option value="gpt3.5" className='bg-transparent p-1 text-black'>Load Preset</option>
              </select>
              <button className="cursor-pointer border p-2 rounded-[10px]">Save</button>
              <button className="cursor-pointer border p-2 rounded-[10px]">View Code</button>
              <button className="cursor-pointer border p-2 rounded-[10px]">Share</button>
            </div>
          </div>
          <div className='flex'>

            <textarea name="text" value={text} id="play" className='bg-[#413f3f69] h-[500px] w-[1000px] px-10 py-8 text-[18px] rounded-3xl' onChange={handleChange} placeholder='Try something to play'/>
            

            <div className='flex flex-col gap-6 mx-9'>
              <label for="model" className='text-3xl'>Model</label>

              <select name="model" id="model" className='bg-transparent w-[220px] border rounded-xl p-2'>
                <option value="gpt3.5" className='bg-transparent p-1 text-black'>gpt 3.5</option>
                <option value="gpt4.0" className='bg-transparent p-1 text-black'>gpt 4.0</option>

              </select>
              <label htmlFor="temperature" className='text-3xl'>Temperature</label>
              <input type="range" name="temperature" id="temperature" className='bg-transparent w-[300px]' />
              <label htmlFor="maxlength" className='text-3xl'>Maximum Length</label>
              <input type="range" name="maxlength" id="maxlength" className='bg-transparent w-[300px]' />
              <label htmlFor="top" className='text-3xl'>Top p</label>
              <input type="range" name="top" id="top" className='bg-transparent w-[300px]' />
            </div>


          </div>

          <div className='flex items-center gap-6'>
            <button className='cursor-pointer italic px-10 py-4 bg-custom-gradient rounded-xl text-xl'>Submit</button>
            <button className='cursor-pointer italic p-4 bg-[#413f3f69] rounded-xl' onClick={handleReset}><img src="reload.svg" alt="" /></button>
          </div>
        </div>

      </div>


    </div>
  </div>
  )
}

export default Playground

