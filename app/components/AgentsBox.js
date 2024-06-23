import React from 'react'

const AgentsBox = (props) => {
  return (
    <div className='container flex items-center justify-center w-[750px] h-[840px] border-[4px] border-blue-700 rounded-[50px] p-3'>
        
        <div className='relative'>
        <img className='object-cover' src={props.imgUrl} alt="john" />
        <div className='absolute bottom-10 left-10'>
        <h2 className='text-white italic bold text-[90px]'>{props.name}</h2>
        <p className='text-white italic text-[24px]'>{props.jobType}</p>
        </div>
        </div>
    
    </div>
  )
}

export default AgentsBox
