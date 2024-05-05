import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutPage from '@/pages/AboutPage';
import ErrorPage from '@/pages/ErrorPage';
import Homepage from '@/pages/Homepage';

// AUTH-PAGES
// import AboutPage from '@/pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
