import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function EmailVerification() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('verifying'); // 'verifying', 'success', 'error'
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = searchParams.get('token');

        if (!token) {
            setStatus('error');
            setMessage('Invalid verification link');
            return;
        }

        // Call the backend to verify the email
        const verifyEmail = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/auth/verify-email?token=${token}`, {
                    method: 'GET',
                });

                const result = await response.json();

                if (response.ok) {
                    setStatus('success');
                    setMessage(result.message);
                    // Redirect to username setup after 2 seconds
                    setTimeout(() => {
                        navigate('/set-username', { state: { email: result.data } });
                    }, 2000);
                } else {
                    setStatus('error');
                    setMessage(result.message || 'Email verification failed');
                }
            } catch (error) {
                setStatus('error');
                setMessage('Network error. Please try again.');
            }
        };

        verifyEmail();
    }, [searchParams, navigate]);

    return (
        <div className='min-w-screen min-h-screen bg-pink-900 bg-linear-to-br from-[#100505] to-[#ff7a2a] flex flex-col items-center justify-center'>
            <div className="text-white p-6 w-[40vw] min-h-[40vh]
                rounded-2xl border border-white/20 
                bg-white/5 
                shadow-2xl
                space-y-4 text-center">

                {status === 'verifying' && (
                    <>
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
                        <h2 className='text-2xl'>Verifying your email...</h2>
                        <p>Please wait while we verify your email address.</p>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <div className="text-green-400 text-6xl mb-4">✓</div>
                        <h2 className='text-2xl text-green-400'>Email Verified Successfully!</h2>
                        <p>{message}</p>
                        <p className="text-sm text-gray-300">Redirecting you to complete your profile...</p>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <div className="text-red-400 text-6xl mb-4">✗</div>
                        <h2 className='text-2xl text-red-400'>Verification Failed</h2>
                        <p className="text-red-300">{message}</p>
                        <button
                            onClick={() => navigate('/register')}
                            className="w-full font-bold text-l rounded-lg text-sm px-5 py-2.5 text-center mt-[5vh] text-[#ff7a2a] cursor-pointer bg-white hover:bg-gray-100 transition-colors"
                        >
                            Back to Registration
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
