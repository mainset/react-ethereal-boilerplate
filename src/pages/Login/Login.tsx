import React from 'react';
import { Link, useNavigate } from 'react-router';

import { postAuthLogin, postUserRegister, useAppDispatch } from 'redux-store';

const SUBMIT_EVENT_ID = {
  LOGIN: 'login',
  REGISTER: 'register',
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isUnregistered, setIsUnregistered] = React.useState<
    true | undefined
  >();

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const data = {
        email: formData.get('email')!,
        password: formData.get('password')!,
        is_remember_me: formData.get('is_remember_me')!,
      };

      const submitterValue = (
        (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement
      ).value;

      return (
        submitterValue === SUBMIT_EVENT_ID.LOGIN
          ? dispatch(postAuthLogin({ data })).catch(() => {
              setIsUnregistered(true);
            })
          : dispatch(postUserRegister({ data }))
      ).then(() => {
        navigate('/portal');
      });
    },
    []
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='Email address' required />
        <br />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        <br />
        <input type='checkbox' name='is_remember_me' id='isRememberMe' />{' '}
        <label htmlFor='isRememberMe'>Keep me signed in</label>
        <br />
        <button
          type='submit'
          value={SUBMIT_EVENT_ID.LOGIN}
          disabled={isUnregistered}
        >
          Login
        </button>{' '}
        <button type='submit' value={SUBMIT_EVENT_ID.REGISTER}>
          Register
        </button>
      </form>

      <br />

      <Link to='/'>Back to home page</Link>
    </div>
  );
};

export default Login;
