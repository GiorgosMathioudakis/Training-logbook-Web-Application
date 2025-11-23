import React, { useState } from 'react';

export default function Exercises() {

    const [exercises, setExercises] = useState([
        {
            id: 1,
            name: "Barbell Bench Press",
            description: "A compound exercise that targets the chest, shoulders, and triceps. Lie on a flat bench and press the weight upward."
        },
        {
            id: 21,
            name: "Deadlift (Conventional)",
            description: "Compound lift targeting the entire posterior chain, specifically lower back, glutes, and hamstrings."
        },
        {
            id: 56,
            name: "Barbell Back Squat",
            description: "The king of leg exercises targeting quads, glutes, and core."
        },
        {
            id: 23,
            name: "Pull-Up",
            description: "Bodyweight vertical pull targeting the lats and biceps with palms facing away."
        },
        {
            id: 41,
            name: "Overhead Press",
            description: "Standing barbell press targeting the entire shoulder girdle."
        },
        {
            id: 83,
            name: "Dumbbell Curl",
            description: "Standing or seated curls allowing for wrist rotation to target biceps."
        },
        {
            id: 96,
            name: "Skullcrusher",
            description: "Lying tricep extension bringing the bar to the forehead."
        },
        {
            id: 63,
            name: "Bulgarian Split Squat",
            description: "Unilateral squat with the rear foot elevated on a bench."
        },
        {
            id: 103,
            name: "Plank",
            description: "Isometric hold targeting the entire core."
        },
        {
            id: 118,
            name: "Treadmill Run",
            description: "Running at a steady pace on a treadmill for cardiovascular endurance."
        },
        {
            id: 130,
            name: "Burpees",
            description: "Full body metabolic conditioning movement."
        },
        {
            id: 155,
            name: "Kettlebell Swing",
            description: "Hinging movement swinging a KB to eye level or overhead."
        }
    ]);

    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold">Exercise Library</h1>
                <p className="text-gray-400">Manage your default and custom exercises.</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    + Add Exercise
                </button>
            </header>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for an exercise..."
                    className="w-full glass-float-effect text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exercises.map((exercise) => (
                    <div
                        key={exercise.id}
                        className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-5 hover:border-orange-500 transition-colors cursor-pointer group"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-gray-100 group-hover:text-orange-400 transition-colors">
                                {exercise.name}
                            </h3>
                            {/* Optional: Add an icon or category tag here later */}
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            {exercise.description}
                        </p>

                        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-end">
                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                                View Details
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State (Hidden for now since we have data) */}
            {exercises.length === 0 && (
                <div className="text-center text-gray-500 py-12">
                    <p>No exercises found.</p>
                </div>
            )}

        </div>
    );
}