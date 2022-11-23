import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OP from './one_page';
import Error from './components/Error';
import Construction from './components/Construction';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<OP />} />
        <Route path="construction" element={<Construction />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
