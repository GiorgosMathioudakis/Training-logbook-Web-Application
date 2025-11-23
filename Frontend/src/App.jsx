import './App.css'
import SignIn from './pages/SignIn.jsx'
import Register from './pages/Register.jsx'
import EmailVerification from './pages/EmailVerification.jsx'
import SetUsername from './pages/SetUsername.jsx'
import Home from "./pages/Home.jsx";
import Exercises from "./pages/Exercises.jsx";
import MainLayout from "./layouts/MainLayout.jsx"; // Import the new layout

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
      <>
        <div className='min-w-screen min-h-screen'>
          <Router>
            <Routes>
              {/* --- PUBLIC ROUTES (No Sidebar) --- */}
              <Route path="/" element={<SignIn />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify-email" element={<EmailVerification />} />
              <Route path="/set-username" element={<SetUsername />} />

              {/* --- PROTECTED APP ROUTES (With Sidebar) --- */}
              {/* Any route inside here will have the Sidebar and MainLayout */}
              <Route element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/exercises" element={<Exercises />} />
                {/* Future pages go here, e.g.: */}
                {/* <Route path="/history" element={<History />} /> */}
              </Route>

            </Routes>
          </Router>
        </div>
      </>
  );
}

export default App;