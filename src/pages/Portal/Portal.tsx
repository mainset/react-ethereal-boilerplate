import React from 'react';
import { Link, useNavigate } from 'react-router';
import {
  fetchInternalWelcomeProtectedData,
  internalWelcomeProtectedDataSelector,
  postAuthLogout,
  useAppDispatch,
  useAppSelector,
} from 'redux-store';

const Portal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const internalWelcomeProtectedData = useAppSelector(
    internalWelcomeProtectedDataSelector,
  );

  const [isPending, setIsPending] = React.useState(true);

  const onBtnLogoutClick = React.useCallback(() => {
    dispatch(postAuthLogout()).then(() => {
      navigate('/');
    });
  }, []);

  React.useEffect(() => {
    dispatch(fetchInternalWelcomeProtectedData()).finally(() => {
      setIsPending(false);
    });
  }, []);

  return isPending ? (
    <p>...</p>
  ) : (
    <div className="example-container">
      <div>
        <p>
          <strong>Internal API</strong>
        </p>
        Welcome message:
        {internalWelcomeProtectedData?.welcomeMessage}
      </div>
      <br />
      <Link to="/">Back to home page</Link>{' '}
      <button onClick={onBtnLogoutClick}>Logout</button>
    </div>
  );
};

export default Portal;
