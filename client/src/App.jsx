import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutPage from '@/pages/AboutPage';
import ErrorPage from '@/pages/ErrorPage';
import Homepage from '@/pages/Homepage';

// AUTH-PAGES
// import LoginPage from '@/pages/auth/LoginPage';
// import RegisterPage from '@/pages/auth/RegisterPage';
// import ForgotPage from '@/pages/auth/ForgotPage';

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
