import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import SignupLogin from './components/SignupLogin';
import Details from './components/Details';
import Contact from './components/Contact';
import AlertState from './components/Alert/AlertState';
import Alert from './components/Alert';
import Admin from './components/Admin';
import Sidebar from './components/Sidebar';
import Info from './components/Info';

function App() {
  return (
    <>
    <AlertState>
      <Router>       
        <Routes>
          <Route exact path="/" element={<SignupLogin/>} />
          <Route path ="/contact" element={<><Navbar/><Contact/></>} />
          <Route path="/details" element={<><Navbar/><Details/></>} />
          <Route path="/admin" element={<><Sidebar/><Admin/></>} />
          <Route path="/info" element={<><Sidebar/><Info/></>} />
        </Routes>
      </Router>
      </AlertState>
    </>
  );
}

export default App;
