import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// You can use a library like 'react-icons' for real icons later
const IconPlaceholder = ({ label }) => (
  <span className="w-5 h-5 mr-3 flex items-center justify-center font-bold">{label[0]}</span>
);

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would clear any stored auth token (e.g., in localStorage)
    console.log("User logged out");
    navigate('/signIn');
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col fixed">
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-orange-500">TrainLog</h1>
      </div>
      <nav className="flex-1 p-3 space-y-2">
        <Link 
          to="/home" 
          className="flex items-center px-4 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <IconPlaceholder label="D" />
          Dashboard
        </Link>
        <Link 
          to="/history" 
          className="flex items-center px-4 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <IconPlaceholder label="H" />
          Workout History
        </Link>
        <Link 
          to="/exercises" 
          className="flex items-center px-4 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <IconPlaceholder label="E" />
          Exercises
        </Link>
      </nav>
      <div className="p-3 border-t border-gray-700">
        <button 
          onClick={handleLogout} 
          className="w-full flex items-center px-4 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <IconPlaceholder label="L" />
          Log Out
        </button>
      </div>
    </div>
  );
}