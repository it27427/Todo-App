import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutPage from '@/pages/AboutPage';
import ErrorPage from '@/pages/ErrorPage';
import Homepage from '@/pages/Homepage';
import TodoPage from '@/pages/TodoPage';

// AUTH-PAGES
import ForgotPage from '@/pages/auth/ForgotPage';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/todo' element={<TodoPage />} />

        {/* AUTH-PAGES */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot-password' element={<ForgotPage />} />

        {/* ERROR-PAGE */}
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
