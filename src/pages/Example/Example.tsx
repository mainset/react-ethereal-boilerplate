import React from 'react';
import { Link } from 'react-router-dom';

import {
  fetchWelcomeData,
  useAppDispatch,
  useAppSelector,
  welcomeDataSelector,
} from 'redux-store';

const Example = () => {
  const dispatch = useAppDispatch();

  const welcome = useAppSelector(welcomeDataSelector);

  React.useEffect(() => {
    dispatch(fetchWelcomeData());
  }, []);

  return (
    <div className='example-container'>
      <div>
        Your IP is:
        {welcome?.origin}
      </div>
      <br />
      <Link to='/'>Back to home page</Link>
    </div>
  );
};

export default Example;
