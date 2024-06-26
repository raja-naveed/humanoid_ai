import React from 'react'

const Login = () => {
  return (
   <>

<div className="relative h-screen  bg-cover bg-center bg-no-repeat flex flex-col md:flex-row" style={{ backgroundImage: `url(backgrounds/loginbg.svg)` }}>  


<img src="banner.svg" alt="" className='md:absolute md:top-0 md:w-1/3' />



    <div className="bg-[#00000046] md:p-8 py-4 px-8 rounded-[33px] shadow-lg w-[30vw] md:max-w-lg w-full md:pb-20 pb-10 md:fixed md:top-[18%] md:right-[10%]">
        <h2 className="text-5xl text-center text-white mb-5 mt-8 md:mb-8 md:mt-16 ">Login</h2>
        <p className="text-center text-gray-50 mb-8 md:mb-16 italic">Humanoid by Lyzer</p>
        <form action=''>
            <div className="md:mb-6 mb-4">
                <label for="email" className="block text-gray-50 text-sm italic mb-2">Enter your email</label>
                <input type="email" id="email" name="email" placeholder="johndoe@email.com" className="shadow appearance-none bg-transparent border rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-6">
                <label for="password" className="block text-gray-50 text-sm italic mb-2">Enter your Password</label>
                <input type="password" id="password" name="password" placeholder="password" className="shadow appearance-none bg-transparent border rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"required />
                <a href="#" className="flex justify-end text-[12px] text-gray-50 hover:text-gray-400 underline">Forgot Password?</a>
               
            </div>
            
        </form>
        <div className="flex justify-between items-center my-4 mx-7 text-center text-gray-400 gap-3">
          <div className='h-[1px] bg-white w-full'></div>
          <span className='text-[12px]'>or</span>
          <div className='h-[1px] bg-white w-full'></div>

          </div>
        <div className="flex flex-col space-y-4">
            <button className="flex items-center justify-center bg-transparent text-gray-50  py-2 px-4 rounded-lg border-[2px] border-white focus:outline-none focus:shadow-outline">
                <img src="google.svg" className="mr-2 " alt="Google Logo"/> Sign in with Google
            </button>
            <button className="flex items-center justify-center bg-transparent text-gray-50  py-3 px-4 rounded-lg border-[2px] border-white focus:outline-none focus:shadow-outline">
                <img src="facebook.svg" className="mr-2" alt="Facebook Logo"/> Sign in with Facebook
            </button>
        </div>
        <p className="text-center text-gray-300 mt-6">Don't have an account? <a href="#" className=" text-white hover:text-gray-200 underline">Signup</a></p>
    </div>
</div>
   </>
  )
}

export default Login


export const metadata = {
  title: "Humaiod AI - Login",
  description: "A 24 HRS ACTIVE ONLINE AGENT",
};