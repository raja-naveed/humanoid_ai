import React from 'react'
import Link from 'next/link'
const NavBar = () => {
    return (
        <nav className='flex justify-between h-[8vh] items-center ml-20 mr-[40px]'>
            <Link href={"/Jhon"} className='text-white flex gap-5 items-center text-lg'>
                <img src="tie.svg" alt="" />
                <span className='text-white bold text-2xl'>HUMAOID AI</span>
            </Link>

            <div className='flex gap-5 justify-center items-center text-white'>
                <div>
                <h3 className='italic'>Jhon Doe</h3>
                <p className='text-gray-500'>j.do3@email.com</p>
                </div>
                <img src="emailProfile.svg" alt="profile" />
                <img src="drop.svg" alt="profile" />
            </div>
        </nav>
    )
}

export default NavBar
