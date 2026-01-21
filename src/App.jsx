import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Overview from './components/Overview';
import CrowdDetection from './components/CrowdDetection';
import TrafficControl from './components/TrafficControl';
import LostPersons from './components/LostPersons';
import Alerts from './components/Alerts';
import Department from './components/Department';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <Router>
        <div className="login-page">
          <Login onLogin={handleLogin} />
        </div>
        <ToastContainer />
      </Router>
    );
  }

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Surveillance & Safety Dashboard</h1>
        </header>

        <div className="content-wrapper">
          <aside className="sidebar">
            <ul>
              <li><NavLink to="/" end>Overview</NavLink></li>
              <li><NavLink to="/crowd-detection">Crowd Detection</NavLink></li>
              <li><NavLink to="/traffic-control">Traffic Control</NavLink></li>
              <li><NavLink to="/lost-persons">Lost Persons</NavLink></li>
              <li><NavLink to="/alerts">Alerts</NavLink></li>
              <li><NavLink to="/department">Department</NavLink></li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </ul>
          </aside>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/crowd-detection" element={<CrowdDetection />} />
              <Route path="/traffic-control" element={<TrafficControl />} />
              <Route path="/traffic-control" element={<TrafficControl />} />
              <Route path="/lost-persons" element={<LostPersons />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/department" element={<Department />} />
            </Routes>
          </main>
        </div>

        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
