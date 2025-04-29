import React from 'react';
import { getAuthMe, useAppDispatch } from 'redux-store';

interface SessionProviderProps {
  children: React.ReactNode;
}

const SessionProvider = ({ children }: SessionProviderProps) => {
  const dispatch = useAppDispatch();
  const [isPending, setIsPending] = React.useState(true);

  React.useEffect(() => {
    dispatch(getAuthMe()).finally(() => {
      setIsPending(false);
    });
  }, []);

  return isPending ? <div>Loading...</div> : children;
};

export { SessionProvider };
