import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Miscellaneous from './Miscellaneous';
import Login from './Login';
import ProjectsAdmin from './ProjectsAdmin';
import './App.css';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const ADMIN_EMAIL = "daltonshort2001@gmail.com";

function Navbar() {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdmin(user && user.email === ADMIN_EMAIL);
      setUserEmail(user ? user.email : null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">
            {isAdmin ? 'Admin' : ''}
          </Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/miscellaneous" className={location.pathname === '/miscellaneous' ? 'active' : ''}>Miscellaneous</Link></li>
          {isAdmin && <li><Link to="/admin-projects" className={location.pathname === '/admin-projects' ? 'active' : ''}>Projects Admin</Link></li>}
          <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  // Protect admin routes: only render if admin
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdmin(user && user.email === ADMIN_EMAIL);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router basename="/websitegit">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/login" element={<Login />} />
          {isAdmin && <Route path="/admin-projects" element={<ProjectsAdmin />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
