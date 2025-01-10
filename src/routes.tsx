import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from './redux/user/slice';
import { getUser } from './redux/user/selectors';
import AuthLayout from './_auth/AuthLayout';
import { SigninForm, SignupForm } from './_auth/forms';
import { isTokenExpired } from './_auth/jwtUtils';
import RootLayout from './_root/RootLayout';
import Home from './_root/pages/Home';

export default function AppRoutes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated: isLoggedIn, token } = useSelector(getUser);

  useEffect(() => {
    if (token && isTokenExpired(token)) {
      dispatch(logout());
      return;
    }

    if (!isLoggedIn) {
      navigate('/sign-in');
      return;
    }

    navigate('/');
  }, [token, isLoggedIn, dispatch, navigate]);

  return (
    <Routes>
      {isLoggedIn ? (
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      ) : (
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
      )}
    </Routes>
  );
}
