import React from 'react';
import { Link } from 'react-router';

import {
  fetchInternalWelcomeData,
  fetchPublicWelcomeData,
  internalWelcomeDataSelector,
  publicWelcomeDataSelector,
  useAppDispatch,
  useAppSelector,
} from 'redux-store';

const Example = () => {
  const dispatch = useAppDispatch();

  const { internalAPIData, publicAPIData } = useAppSelector((store) => ({
    internalAPIData: internalWelcomeDataSelector(store),
    publicAPIData: publicWelcomeDataSelector(store),
  }));

  React.useEffect(() => {
    // internal API
    dispatch(fetchInternalWelcomeData());
    // public API
    dispatch(fetchPublicWelcomeData());
  }, []);

  return (
    <div className='example-container'>
      <div>
        <p><strong>Internal API</strong></p>
        Welcome message:
        {internalAPIData?.welcomeMessage}
      </div>

      <div>
        <p><strong>Public API</strong></p>
        Your IP is:
        {publicAPIData?.origin}
      </div>
      <br />
      <Link to='/'>Back to home page</Link>
    </div>
  );
};

export default Example;
