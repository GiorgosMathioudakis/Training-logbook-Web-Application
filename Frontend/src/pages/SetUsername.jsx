import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SetUsername() {
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Get email from location state or URL params
    const email = location.state?.email || new URLSearchParams(location.search).get('email');

    useEffect(() => {
        // Add a small delay to prevent flash
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const validateUsername = (username) => {
        if (!username) return 'Username is required';
        if (username.length < 1) return 'Username must be at least 1 character long';
        if (username.length > 25) return 'Username must be no more than 25 characters long';
        if (username.includes(' ')) return 'Username cannot contain spaces';
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateUsername(username);
        if (validationError) {
            setError(validationError);
            return;
        }

        if (!email) {
            setError('Email not found. Please register again.');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8080/api/auth/set-username', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    username: username
                }),
            });

            const result = await response.json();

            if (response.ok) {
                navigate('/Home');
            } else {
                setError(result.message || 'Failed to set username');
            }
        } catch (error) {
            setError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Show loading state to prevent flash
    if (isLoading) {
        return (
            <div className='min-w-screen min-h-screen bg-pink-900 bg-linear-to-br from-[#100505] to-[#ff7a2a] flex flex-col items-center justify-center'>
                <div className="text-white p-6 w-[40vw] min-h-[40vh]
                  rounded-2xl border border-white/20 
                  bg-white/5 
                  shadow-2xl
                  space-y-4 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
                    <h2 className='text-2xl'>Loading...</h2>
                    <p>Please wait...</p>
                </div>
            </div>
        );
    }

    if (!email) {
        return (
            <div className='min-w-screen min-h-screen bg-pink-900 bg-linear-to-br from-[#100505] to-[#ff7a2a] flex flex-col items-center justify-center'>
                <div className="text-white p-6 w-[40vw] min-h-[40vh]
                  rounded-2xl border border-white/20 
                  bg-white/5 
                  shadow-2xl
                  space-y-4 text-center">
                    <h2 className='text-2xl text-red-400'>Error</h2>
                    <p>Email not found. Please complete the registration process again.</p>
                    <button
                        onClick={() => navigate('/register')}
                        className="w-full font-bold text-l rounded-lg text-sm px-5 py-2.5 text-center mt-[5vh] text-[#ff7a2a] cursor-pointer bg-white hover:bg-gray-100 transition-colors"
                    >
                        Back to Registration
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='min-w-screen min-h-screen bg-pink-900 bg-linear-to-br from-[#100505] to-[#ff7a2a] flex flex-col items-center justify-center'>
            <div className="text-white p-6 w-[40vw] min-h-[50vh]
                rounded-2xl border border-white/20 
                bg-white/5 
                shadow-2xl
                space-y-4">
                <h2 className='text-3xl mb-[5px]'>
                    Complete Your Profile
                </h2>
                <h3 className='text-l text-gray-300'>
                    Choose a username to finish your registration
                </h3>

                <form className='mt-[5%] space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <label className='block mb-2'>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border border-gray-300 w-full p-2.5 rounded-lg"
                            placeholder="Enter username (1-25 characters, no spaces)"
                            required
                            disabled={isSubmitting}
                        />
                        {error && (
                            <p className="text-red-400 text-sm mt-1">{error}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full font-bold text-l rounded-lg text-sm px-5 py-2.5 text-center mt-[5vh] ${isSubmitting
                            ? 'text-gray-400 cursor-not-allowed bg-gray-200'
                            : 'text-[#ff7a2a] cursor-pointer bg-white hover:bg-gray-100 transition-colors'
                            }`}
                    >
                        {isSubmitting ? 'Setting Username...' : 'Complete Registration'}
                    </button>
                </form>
            </div>
        </div>
    );
}
