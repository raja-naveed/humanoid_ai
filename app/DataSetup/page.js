import React from 'react'
import NavBar from '../components/NavBar'
import AgentsBoxSmall from '../components/AgentsBoxSmall'
import Link from 'next/link'

const DataSetup = () => {
  return (
    <div>
    <div className="h-screen  bg-cover bg-center bg-no-repeat flex flex-col gap-14 " style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
      <NavBar />

      <div className="flex mt-12">
        <div className="first mx-[65px] flex flex-col gap-20 w-1/3">
          <AgentsBoxSmall imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
          <div className='text-white flex flex-col gap-7 italic'>
            <Link href={'/Playground'} className='text-[#9e9c9cac] text-[26px]'>Playground</Link>
            <Link href={'/DataSetup'} className='text-[45px]' >Data Setup</Link>
            <Link href={'/IntegrationSetting'} className='text-[#9e9c9cac] text-[26px]'>Integration Setting</Link>
          </div>
        </div>

        <div className="second flex flex-col gap-5 text-white bg-[#8985851c] p-7 rounded-3xl w-full mr-[65px] ">

          <div className="flex w-full justify-between">
            <h3 className="text-4xl italic">Data Setup</h3>
          </div>
            <p className='text-2xl'>Upload your logic Business Reports</p>
          <div className='flex flex-col items-center justify-center gap-3 bg-[#413f3f69] w-[99%] rounded-3xl mx-auto py-10'>
            <img width={"50px"} height={"60px"} src="pdf.svg" alt="pdf" />
            <span className='text-2xl mt-5'>Drag and Drop here</span>
            <div className='w-[300px] h-[3px] bg-gray-600 mb-5'></div>
            <button className='cursor-pointer bg-custom-gradient text-xl italic px-7 py-3 rounded-xl my-5'>Browse Files</button>
          </div>

          <div className='flex gap-8 items-center'>
            <label htmlFor="role" className='text-2xl'>Role</label>
            <input type="text" name="role" id="role" className='bg-[#413f3f69] w-[500px] border rounded-xl py-4 px-6 text-xl' placeholder='Hiring'/>
            <label htmlFor="department" className='text-2xl'>Department</label>
            <input type="text" name="department" id="department" className='bg-[#413f3f69] w-[500px] border rounded-xl py-4 px-6 text-xl' placeholder='React Developer'/>
            </div>

           <label htmlFor="initiate" className='text-2xl'>Initiate prompt for the agent</label>
            <input type="text" name="initiate" id="initiate" className='bg-[#413f3f69] w-full border rounded-2xl py-4 px-6 text-xl'placeholder='Initiate prompt for the agent...'/>

          <div className='flex items-center gap-6'>
            <button className='cursor-pointer italic px-10 py-4 bg-custom-gradient rounded-xl text-xl'>Train Agent</button>
          </div>
        </div>

      </div>


    </div>
  </div>
  )
}

export default DataSetup
