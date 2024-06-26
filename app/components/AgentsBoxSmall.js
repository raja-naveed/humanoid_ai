import React from 'react'

const AgentsBoxSmall = (props) => {
  return (
    // <div className='container flex items-center justify-center w-[335px] h-[370px] border-[3px] border-blue-700 rounded-[30px] p-2'>
        <div className='relative'>
        <img className='border-4 border-blue-600 p-2 rounded-[20px] h-[40vh]' src={props.imgUrl} alt="agent" />
        <div className='absolute bottom-6 left-6'>
        <h2 className='text-white italic bold text-[90px]'>{props.name}</h2>
        <p className='text-white italic text-[24px]'>{props.jobType}</p>
        </div>
        </div>
    
    // </div>
  )
}

export default AgentsBoxSmall
