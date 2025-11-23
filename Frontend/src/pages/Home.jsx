import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    // State for User and Workouts
    const [user, setUser] = useState(null);
    const [recentWorkouts, setRecentWorkouts] = useState([]);

    useEffect(() => {
        // 1. Get the user from LocalStorage (Persistent way)
        // Note: Make sure you save this in SignIn.jsx as discussed!
        const storedUser = localStorage.getItem('currentUser');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            // If no user found in storage, redirect to sign in
            console.log("No user found, redirecting...");
            // navigate('/signIn'); // Uncomment this when you are ready to enforce login
        }

        // 2. Fetch recent workouts (Mock data for now)
        setRecentWorkouts([
            // You can uncomment this to see what it looks like with data:
            // { id: 1, name: 'Upper Body Power', date: 'Oct 24, 2023' },
            // { id: 2, name: 'Leg Day Survival', date: 'Oct 22, 2023' }
        ]);
    }, [navigate]);

    return (
        <>
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
                <div className="md:col-span-2 glass-float-effect p-6 flex flex-col justify-center items-center text-center bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700">
                    <h2 className="text-2xl font-semibold mb-4">Start a New Workout</h2>
                    <p className="text-gray-400 mb-6">
                        Begin a new session or choose from one of your saved templates.
                    </p>
                    <button
                        onClick={() => navigate('/workout/new')}
                        className="text-white font-bold py-3 px-8 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors shadow-lg"
                    >
                        Start Now
                    </button>
                </div>

                {/* Card 2: Recent Workouts */}
                <div className="glass-float-effect p-6 bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700">
                    <h2 className="text-2xl font-semibold mb-5">Recent Workouts</h2>
                    <div className="space-y-4">
                        {recentWorkouts.length > 0 ? (
                            recentWorkouts.map(workout => (
                                <Link
                                    to={`/workout/${workout.id}`}
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
                            <div className="text-gray-400 text-center py-4">
                                <p>You haven't logged any workouts yet.</p>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/history"
                        className="text-orange-400 hover:text-orange-300 text-sm font-medium mt-5 block text-center"
                    >
                        View all workout history
                    </Link>
                </div>

                {/* Optional: Card 3 (Stats Placeholder) */}
                {/* You can add more cards here later */}
            </div>
        </>
    );
}