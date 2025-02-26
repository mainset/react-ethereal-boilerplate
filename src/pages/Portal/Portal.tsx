import React from 'react';
import { Link } from 'react-router';

import {
  fetchInternalWelcomeProtectedData,
  internalWelcomeProtectedDataSelector,
  useAppDispatch,
  useAppSelector,
} from 'redux-store';

const Portal = () => {
  const dispatch = useAppDispatch();

  const internalWelcomeProtectedData = useAppSelector(
    internalWelcomeProtectedDataSelector
  );

  const [isPending, setIsPending] = React.useState(true);

  React.useEffect(() => {
    dispatch(fetchInternalWelcomeProtectedData()).finally(() => {
      setIsPending(false);
    });
  }, []);

  return isPending ? (
    <p>...</p>
  ) : (
    <div className='example-container'>
      <div>
        <p>
          <strong>Internal API</strong>
        </p>
        Welcome message:
        {internalWelcomeProtectedData?.welcomeMessage}
      </div>

      <br />
      <Link to='/'>Back to home page</Link>
    </div>
  );
};

export default Portal;
