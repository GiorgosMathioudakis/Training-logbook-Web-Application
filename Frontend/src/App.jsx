import './App.css'
import SignIn from './pages/SignIn.jsx'
import Register from './pages/Register.jsx'
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
            <Route path="/" element={<SignIn />}>
              <Route path="SignIn" element={<SignIn />} />
              <Route path="Register" element={<Register />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App
