import React, { useState, useEffect } from 'react';

export default function Exercises() {
    // State to store the fetched exercises
    const [exercises, setExercises] = useState([]);

    // State to handle loading and error status
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API on component mount
    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await fetch('/exercises/get-all');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setExercises(data);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch exercises:", err);
                setError("Failed to load exercises. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchExercises();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="w-full">
            <header className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-white">Exercise Library</h1>
                    <p className="text-gray-400 mt-2">Browse default exercises or add your own.</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    + Add Exercise
                </button>
            </header>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for an exercise..."
                    className="w-full glass-float-effect bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                />
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
                    {error}
                </div>
            )}

            {/* Exercises Grid */}
            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exercises.map((exercise) => (
                        <div
                            /* Note: We use exercise_id because that matches your PostgreSQL table */
                            key={exercise.exercise_id}
                            className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-5 hover:border-orange-500 transition-colors cursor-pointer group flex flex-col gap-4"
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-semibold text-gray-100 group-hover:text-orange-400 transition-colors">
                                    {exercise.name}
                                </h3>
                                {/* Optional: Add an icon or category tag here later */}
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {exercise.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-gray-700 flex justify-end">
                                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                                    View Details
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!loading && !error && exercises.length === 0 && (
                <div className="text-center text-gray-500 py-12">
                    <p>No exercises found.</p>
                </div>
            )}

        </div>
    );
}