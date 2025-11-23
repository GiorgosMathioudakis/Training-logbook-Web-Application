import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx'; // Ensure path is correct

const MainLayout = () => {
    return (
        <div className="min-h-screen flex brand-gradient text-white">
            {/* Sidebar stays persistent here */}
            <Sidebar />

            {/* The right side content changes based on the route */}
            <main className="flex-1 p-8 ml-64">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;