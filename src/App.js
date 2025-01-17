// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Forms';
import Uploadresume from './components/Uploadresume';
import Selectionresume from './components/Selectionresume';
import 'react-quill/dist/quill.snow.css';
import './index.css';
import { ResumeProvider } from './components/ResumeContext';

function App() {
  return (
    <Router>
      <div className="app">
        <ResumeProvider>
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/:token" element={<Selectionresume />} />
            <Route path="/uploadresume" element={<Uploadresume />} />
          </Routes>
        </ResumeProvider>
      </div>
    </Router>
  );
}

export default App;
