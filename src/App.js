import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import CalculatorPage from './pages/Calculator';
import Home from './pages/Home';
import QuotesPage from './pages/Quotes';

function App() {
  const location = useLocation();

  useEffect(() => {
    alert(`Navigating to ${location.pathname}`);
  }, [location.pathname]);
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotesPage />} />
      </Routes>
    </>
  );
}

export default App;
