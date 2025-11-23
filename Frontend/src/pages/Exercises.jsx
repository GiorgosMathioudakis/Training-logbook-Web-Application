import React from 'react';

export default function Exercises() {
    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold">Exercise Library</h1>
                <p className="text-gray-400">Manage your default and custom exercises.</p>
            </header>

            <div className="bg-gray-800 p-6 rounded-lg">
                <p>List of exercises will go here...</p>
                {/* Add Exercise Button, List, etc. */}
            </div>
        </div>
    );
}