import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <h1 className="text-3xl font-bold">Welcome Home</h1>
            <h3 className='text-l'>
                <Link to="/signIn" className='underline'>Log Out</Link>
            </h3>
        </div>
    );
}
