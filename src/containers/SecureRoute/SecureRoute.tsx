import React from 'react';
import { Navigate, Outlet } from 'react-router';

import { currentSessionUserIdSelector, useAppSelector } from 'redux-store';

const Protected = () => {
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

const Public = () => {
  const currentSessionUserId = useAppSelector(currentSessionUserIdSelector);
  const isAuthenticated = Boolean(currentSessionUserId);

  return isAuthenticated ? (
    <Navigate
      to='/portal'
      replace
      // state={{ from: typeof window !== 'undefined' && window.location }}
    />
  ) : (
    <Outlet />
  );
};

const SecureRoute = {
  Protected,
  Public,
}

export { SecureRoute };
