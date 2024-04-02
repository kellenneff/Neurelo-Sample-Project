import React from 'react';
import MainPage from './pages/MainPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className ='pages'>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
