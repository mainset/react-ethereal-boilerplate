import React from 'react';
import { Navigate, Outlet } from 'react-router';

import { currentSessionUserIdSelector, useAppSelector } from 'redux-store';

const ProtectedRoute = () => {
  const currentSessionUserId = useAppSelector(currentSessionUserIdSelector);
  const isAuthenticated = Boolean(currentSessionUserId);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to='/login'
      replace
      // state={{ from: typeof window !== 'undefined' && window.location }}
    />
  );
};

export { ProtectedRoute };
