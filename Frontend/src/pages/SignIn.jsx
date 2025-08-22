import React from 'react'
import SocialLogin from '../components/SocialLogin.jsx';
import googleIcon from '../assets/google.svg';
import appleIcon from '../assets/apple.svg';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
} from 'react-router-dom';

export default function SignIn() {
    return (
        <div className='min-w-screen min-h-screen bg-pink-900 bg-linear-to-br from-[#100505] to-[#ff7a2a] flex flex-col items-center justify-center'>
            <div className="text-white p-6 space-y-4 w-[40vw] h-[75vh]  
                rounded-2xl border border-white/20 
                bg-white/5 
                shadow-2xl
                space-y-4">
                <h2 className='text-3xl mb-[5px]'>
                    Sign In
                </h2>
                <h3 className='text-l'>
                    New User? <Link to="/register" className='underline'>Create an account</Link>
                </h3>
                <form className='mt-[5%] space-y-4'>
                    <div>
                        <label className='block mb-2'>Email</label>
                        <input className='border w-full p-2.5 rounded-lg' placeholder="name@company.com" required></input>
                    </div>
                    <div>
                        <label className='block mb-2'>Password</label>
                        <input className='border w-full p-2.5 rounded-lg' placeholder="••••••••" required></input>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input type="checkbox" className="w-4 h-4 " required=""></input>
                            </div>
                            <div className="ml-3 text-sm">
                                <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-[#ff7a2a] cursor-pointer bg-white font-bold text-l rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                    <p className='separator'> <span>Or continue with</span> </p>
                    <div className=' gap-[1.31rem] text-[#ff7a2a]'>
                        <SocialLogin text={"Google"} image={googleIcon} alt="Google" />
                        <SocialLogin text={"Apple"} image={appleIcon} alt="Apple" />
                    </div>
                </form>
            </div>
        </div>
    )
}
