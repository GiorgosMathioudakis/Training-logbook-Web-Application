import './App.css'
import SignIn from './pages/SignIn.jsx'
import Register from './pages/Register.jsx'
import EmailVerification from './pages/EmailVerification.jsx'
import SetUsername from './pages/SetUsername.jsx'
import Home from "./pages/Home.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';


function App() {

  return (
    <>
      <div className='min-w-screen min-h-screen'>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route path="/set-username" element={<SetUsername />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App
