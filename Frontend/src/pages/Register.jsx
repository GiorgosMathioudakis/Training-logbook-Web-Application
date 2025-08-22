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

export default function Register() {
  return (
    <div className='min-w-screen min-h-screen bg-pink-900 bg-linear-to-br from-[#100505] to-[#ff7a2a] flex flex-col items-center justify-center'>
      <div className="text-white p-6 space-y-4 w-[40vw] h-[65vh]  
                rounded-2xl border border-white/20 
                bg-white/5 
                shadow-2xl
                space-y-4">
        <h2 className='text-3xl mb-[5px]'>
          Create your account
        </h2>
        <h3 className='text-l'>
          Already have an account? <Link to="/signIn" className='underline'>Sign In</Link>
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
          <div>
            <label className='block mb-2'>Repeat Password</label>
            <input className='border w-full p-2.5 rounded-lg' placeholder="••••••••" required></input>
          </div>
          <button type="submit" className="w-full text-[#ff7a2a] cursor-pointer bg-white font-bold text-l rounded-lg text-sm px-5 py-2.5 text-center mt-[5vh]">Register</button>
        </form>
      </div>
    </div>
  )
}
