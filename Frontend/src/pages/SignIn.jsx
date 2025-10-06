import SocialLogin from '../components/SocialLogin.jsx';
import googleIcon from '../assets/google.svg';
import appleIcon from '../assets/apple.svg';
import React, { use, useState } from 'react'


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
    useNavigate
} from 'react-router-dom';
import PasswordField from '../components/PasswordField.jsx';


export default function SignIn() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [serverError, setServerError] = useState('');
    const [loginError, setLoginError] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let hasError = false;
        if (!email) {
            setEmailError('Email is required');
            hasError = true;
        }
        if (!password) {
            setPasswordError('Password is required');
            hasError = true;
        }
        if (hasError) return;

        try {
            const response = await fetch('http://localhost:8080/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Invalid credentials');
            }

            const user = data.data;

            if (user.username === null || user.username === "") {
                navigate("/set-username", { state: { email: user.email } });
            } else {
                navigate("/home", { state: { user } });
            }

        } catch (error) {
            setLoginError('Sorry, invalid email or password');
            setServerError(error.message);
        }
    };

    return (
        <div className='min-w-screen min-h-screen bg-pink-900 bg-linear-to-br from-[#100505] to-[#ff7a2a] flex flex-col items-center justify-center'>
            <div className="text-white p-6 space-y-4 w-full max-w-md min-h-[450px] 
                rounded-2xl border border-white/20 
                bg-white/5 
                shadow-2xl
                flex flex-col justify-center">
                <h2 className='text-3xl mb-[5px]'>
                    Sign In
                </h2>
                <h3 className='text-l'>
                    New User? <Link to="/register" className='underline'>Create an account</Link>
                </h3>
                <form className='mt-4 space-y-4 flex flex-col' onSubmit={handleSubmit}>
                    <div>
                        <label className='block mb-2'>Email</label>
                        <input className='border w-full p-2.5 rounded-lg' placeholder="name@company.com" required value={email} onChange={handleEmailChange}></input>
                        {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
                    </div>
                    <PasswordField
                        value={password}
                        onChange={handlePasswordChange}
                        error={passwordError}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input type="checkbox" className="w-4 h-4 " required=""></input>
                            </div>
                            <div className="ml-3 text-sm">
                                <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-[#ff7a2a] cursor-pointer bg-white font-bold text-l rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                    {loginError && (
                        <p className="text-red-400 text-center text-m mt-2">{loginError}</p>
                    )}
                    <p className='separator'> <span>Or continue with</span> </p>
                    <div className='flex flex-col gap-1 text-[#ff7a2a]'>
                        <SocialLogin text={"Google"} image={googleIcon} alt="Google" />
                        <SocialLogin text={"Apple"} image={appleIcon} alt="Apple" />
                    </div>
                </form>
            </div>
        </div>
    )
}
