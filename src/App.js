import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { NotFound } from './pages/NotFound';
import { AuthRouter } from './router/AuthRouter';
import { PublicRoute } from './router/PublicRoute';
import { PrivateRoute } from './router/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { startChecking } from './store/actions/actionsAuth';
import { ChangePassword } from './pages/ChangePassword';
import { Response } from './pages/Response';
import { RecoverPassword } from './pages/RecoverPassword';
import { ResetPassword } from './pages/ResetPassword';
import { AboutUs } from './pages/AboutUs';
import { AboutProject } from './pages/AboutProject';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/change-password"
          element={
            <PrivateRoute>
              <ChangePassword />
            </PrivateRoute>
          }
        />
        <Route path="/recover-password" element={<RecoverPassword />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/auth/*"
          element={
            <PublicRoute>
              <AuthRouter />
            </PublicRoute>
          }
        />

        <Route path="/response" element={<Response />} />
        <Route path="/reset-password/*" element={<ResetPassword />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/project" element={<AboutProject />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
