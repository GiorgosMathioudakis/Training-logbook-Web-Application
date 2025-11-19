import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx'; // Import the sidebar

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();

    const user = location.state?.user;

    const [recentWorkouts, setRecentWorkouts] = useState([]);

    useEffect(() => {
        // If there's no user, maybe they refreshed. Send them to sign in.
        if (!user) {
            // A more robust solution would check a token, not just component state
            // navigate('/signIn');
            console.log("No user state, (ideally, redirect to login)");
        }
        
        // TODO: Fetch recent workouts from your backend
        // e.g., fetch(`/api/workouts/user/${user.userId}/recent?limit=3`)
        // For now, we use mock data
        setRecentWorkouts([
        ]);
    }, [user, navigate]);


    return (
        <div className="min-h-screen flex brand-gradient text-white">
            <Sidebar />
            
            {/* Main content area */}
            <main className="flex-1 p-8 ml-64"> {/* ml-64 to offset for the sidebar width */}
                
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-3xl font-bold">
                        Welcome back, {user ? user.username : 'User'}!
                    </h1>
                    <p className="text-gray-400">Ready to crush your next session?</p>
                </header>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Start New Workout (Primary CTA) */}
                    <div className="md:col-span-2 glass-float-effect p-6 flex flex-col justify-center items-center text-center">
                        <h2 className="text-2xl font-semibold mb-4">Start a New Workout</h2>
                        <p className="text-gray-400 mb-6">
                            Begin a new session or choose from one of your saved templates.
                        </p>
                        <button 
                            onClick={() => navigate('/workout/new')} // You'll create this route
                            className=" text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Start Now
                        </button>
                    </div>

                    {/* Card 2: Recent Workouts */}
                    <div className="glass-float-effect p-6">
                        <h2 className="text-2xl font-semibold mb-5">Recent Workouts</h2>
                        <div className="space-y-4">
                            {recentWorkouts.length > 0 ? (
                                recentWorkouts.map(workout => (
                                    <Link 
                                        to={`/workout/${workout.id}`} // Route to view a specific workout
                                        key={workout.id} 
                                        className="block bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">{workout.name}</span>
                                            <span className="text-sm text-gray-400">{workout.date}</span>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-gray-400">You haven't logged any workouts yet.</p>
                            )}
                        </div>
                        <Link 
                            to="/history" 
                            className="text-orange-400 hover:text-orange-300 text-sm font-medium mt-5 block text-center"
                        >
                            View all workout history
                        </Link>
                    </div>

                    {/* Add more cards/widgets here (e.g., stats, personal records) */}

                </div>
            </main>
        </div>
    );
}