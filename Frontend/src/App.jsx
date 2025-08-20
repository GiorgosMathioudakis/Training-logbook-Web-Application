import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-w-screen min-h-screen bg-pink-900 bg-linear-to-br from-[#100505] to-[#ff7a2a] flex flex-col items-center'>
      <h1 className='text-white flex justify-center text-3xl'>
        App Name!
      </h1>
      <div className="text-white p-6 space-y-4 w-[40vw] h-[70vh] mt-[5%]  
            rounded-2xl border border-white/20 
            bg-white/5 
            shadow-2xl
            space-y-4">
        <h2 className='text-3xl mt-[10%]'>
          Sign In
        </h2>
        <h3 className='text-l'>
          New User? <a href=''>Create an account</a>
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
        </form>
      </div>
    </div>
  )
}

export default App
