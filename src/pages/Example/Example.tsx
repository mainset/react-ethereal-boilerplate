import React from 'react';
import { Link } from 'react-router';

import {
  externalPublicWelcomeDataSelector,
  fetchExternalWelcomePublicData,
  fetchInternalWelcomePublicData,
  internalWelcomePublicDataSelector,
  useAppDispatch,
  useAppSelector,
} from 'redux-store';

const Example = () => {
  const dispatch = useAppDispatch();

  const { internalWelcomePublicData, externalPublicWelcomeData } =
    useAppSelector((store) => ({
      internalWelcomePublicData: internalWelcomePublicDataSelector(store),
      externalPublicWelcomeData: externalPublicWelcomeDataSelector(store),
    }));

  React.useEffect(() => {
    // internal API
    dispatch(fetchInternalWelcomePublicData());
    // external API
    dispatch(fetchExternalWelcomePublicData());
  }, []);

  return (
    <div className='example-container'>
      <div>
        <p>
          <strong>Internal API</strong>
        </p>
        Welcome message:
        {internalWelcomePublicData?.welcomeMessage}
      </div>

      <div>
        <p>
          <strong>Public API</strong>
        </p>
        Your IP is:
        {externalPublicWelcomeData?.origin}
      </div>

      <br />
      <Link to='/'>Back to home page</Link>
    </div>
  );
};

export default Example;
