import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OP from './one_page';
import Promo from './Promo';
import Error from './components/Error';
import Construction from './components/Construction';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<OP />} />
        <Route exact path="/construction" element={<Construction />} />
        <Route exact path="/reparation" element={<Promo />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
