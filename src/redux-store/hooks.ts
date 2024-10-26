import { useDispatch, useSelector } from 'react-redux';

import type { TypedUseSelectorHook } from 'react-redux';

import type { AppDispatch, RootState } from './redux-store';

// https://redux.js.org/usage/usage-with-typescript#withtypes
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
