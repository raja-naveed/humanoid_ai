// import React from 'react'
// import NavBar from '../components/NavBar'
// import AgentsBoxSmall from '../components/AgentsBoxSmall'
// import Link from 'next/link'

// const IntegrationSetting = () => {
//   return (
//     <div>
//     <div className="h-screen  bg-cover bg-center bg-no-repeat flex flex-col gap-14 " style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
//       <NavBar />

//       <div className="flex mt-12">
//         <div className="first mx-[65px] flex flex-col gap-20 w-1/3">
//           <AgentsBoxSmall imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
//           <div className='text-white flex flex-col gap-7 italic'>
//             <Link href={'/Playground'} className='text-[#9e9c9cac] text-[26px]'>Playground</Link>
//             <Link href={'/DataSetup'} className='text-[#9e9c9cac] text-[26px]' >Data Setup</Link>
//             <Link href={'/IntegrationSetting'} className='text-[45px]'>Integration Setting</Link>
//           </div>
//         </div>

//         <div className="second flex flex-col gap-12 text-white bg-[#8985851c] p-7 rounded-3xl w-full mr-[65px] h-[59vh]">

//           <div className="flex w-full justify-between">
//             <h3 className="text-4xl italic">Integration Setting</h3>
//           </div>
//           <div className='flex flex-col gap-5 bg-[#413f3f69] w-[99%] rounded-3xl mx-auto'>
//             <div className='flex m-auto gap-7'>
//             <button className='cursor-pointer flex gap-5 p-4 items-center bg-custom-gradient m-10 rounded-xl'><img src="IntegrationIcons/slack.svg" alt="slack" /> <span>Slack</span></button>
//             <button className='cursor-pointer flex gap-5 p-4 items-center bg-custom-gradient m-10 rounded-xl'><img src="IntegrationIcons/jira.svg" alt="jira" /> <span>Jira</span></button>
//             </div>

//             <div className='flex m-auto gap-7'>
//             <button className='cursor-pointer flex gap-5 p-4 items-center bg-custom-gradient m-10 rounded-xl'><img src="IntegrationIcons/messenger.svg" alt="messenger" /> <span>Messenger</span></button>
//             <button className='cursor-pointer flex gap-5 p-4 items-center bg-custom-gradient m-10 rounded-xl'><img src="IntegrationIcons/whatsapp.svg" alt="whatsapp" /> <span>Whatsapp</span></button>
//             </div>


//           </div>

//           <div className='flex items-center gap-6'>
//             <button className='cursor-pointer italic px-10 py-4 bg-custom-gradient rounded-xl text-xl'>Integrate</button>
//           </div>
//         </div>

//       </div>


//     </div>
//   </div>
//   )
// }

// export default IntegrationSetting


// export const metadata = {
//   title: "Humaiod AI - Intergration Setting",
//   description: "Integration Setting page for Humaiod AI",
// };


// "use client";
import React from 'react';
import NavBar from '../components/NavBar';
import AgentsBoxSmall from '../components/AgentsBoxSmall';
import Link from 'next/link';

const IntegrationSetting = () => {
  return (
    <div>
  
     
      <div className="min-h-screen bg-cover bg-center bg-repeat-y md:bg-no-repeat flex flex-col gap-14" style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
        <NavBar />
      <div>


        <div className="flex flex-col lg:flex-row mt-10">
          <div className="first mx-2 md:mx-[65px] flex flex-col lg:gap-20 w-full lg:w-1/3 mb-3 lg:mb-0">
            <AgentsBoxSmall imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
            <div className='text-white flex flex-col gap-3 lg:gap-7 italic my-5'>
              <Link href={'/Playground'} className='text-[#9e9c9cac] text-[15px] md:text-[26px]'>Playground</Link>
              <Link href={'/DataSetup'} className='text-[#9e9c9cac] text-[15px] md:text-[26px]'>Data Setup</Link>
              <Link href={'/IntegrationSetting'} className='text-[25px] md:text-[45px]'>Integration Setting</Link>
            </div>
          </div>

          <div className="second flex flex-col gap-6 md:gap-12 text-white bg-[#8985851c] p-4 md:p-7 rounded-3xl w-full mx-2 lg:mx-0 lg:mr-[65px] h-full  md:h-[59vh]">
            <div className="flex justify-between">
              <h3 className="text-2xl md:text-4xl italic">Integration Setting</h3>
            </div>
            <div className='flex flex-col md:gap-16 gap-5 bg-[#413f3f69] w-full rounded-3xl p-4 md:p-6'>
              <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center items-center md:gap-20 gap-5'>
                <button className='cursor-pointer flex gap-2 md:gap-5 p-4 items-center bg-custom-gradient rounded-xl'><img src="IntegrationIcons/slack.svg" alt="slack" className='h-6 w-6 md:h-8 md:w-8' /> <span>Slack</span></button>
                <button className='cursor-pointer flex gap-2 md:gap-5 p-4 items-center bg-custom-gradient rounded-xl'><img src="IntegrationIcons/jira.svg" alt="jira" className='h-6 w-6 md:h-8 md:w-8' /> <span>Jira</span></button>
              </div>
              <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center items-center md:gap-20 gap-5'>
                <button className='cursor-pointer flex gap-2 md:gap-5 p-4 items-center bg-custom-gradient rounded-xl'><img src="IntegrationIcons/messenger.svg" alt="messenger" className='h-6 w-6 md:h-8 md:w-8' /> <span>Messenger</span></button>
                <button className='cursor-pointer flex gap-2 md:gap-5 p-4 items-center bg-custom-gradient rounded-xl'><img src="IntegrationIcons/whatsapp.svg" alt="whatsapp" className='h-6 w-6 md:h-8 md:w-8' /> <span>Whatsapp</span></button>
              </div>
            </div>

            <div className='flex justify-center md:justify-start gap-6 mt-4'>
              <button className='cursor-pointer italic px-6 md:px-10 py-2 md:py-3 bg-custom-gradient rounded-xl text-lg md:text-xl'>Integrate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}

export default IntegrationSetting;

export const metadata = {
  title: "Humanoid AI - Integration Setting",
  description: "Integration Setting page for Humanoid AI",
};


