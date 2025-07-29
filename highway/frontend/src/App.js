import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// pages
import Home from './pages/Home.tsx';
import Login from './pages/Signin.tsx';
import Signup from './pages/Signup.tsx';
import NotFound from "./pages/Not-found.tsx"
import Welcome from "./pages/Welcome.tsx"
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    
    if (stored) {
      setUser(JSON.parse(stored));
    }
    
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home user={user} setUser={setUser}/> : <Navigate to="/login" />} />
        <Route path="/welcome" element={user ? <Welcome user={user} setUser={setUser}/> : <Navigate to="/login" />} />
        
            <Route path="/login" element={!user ? <Login setUser={setUser} /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Signup setUser={setUser} /> : <Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
