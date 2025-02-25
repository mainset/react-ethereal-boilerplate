import {
  FETCH_INTERNAL_WELCOME_DATA,
  FETCH_INTERNAL_WELCOME_DATA_ERROR,
  FETCH_INTERNAL_WELCOME_DATA_SUCCESS,
  FETCH_PUBLIC_WELCOME_DATA,
  FETCH_PUBLIC_WELCOME_DATA_ERROR,
  FETCH_PUBLIC_WELCOME_DATA_SUCCESS,
} from './constants';

const initialState = {
  internalAPIData: null,
  publicAPIData: null,

  isLoading: false,
  error: null,
};

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    // internal API
    case FETCH_INTERNAL_WELCOME_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_INTERNAL_WELCOME_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        internalAPIData: action.data,
      };
    case FETCH_INTERNAL_WELCOME_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    // public API
    case FETCH_PUBLIC_WELCOME_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PUBLIC_WELCOME_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        publicAPIData: action.data,
      };
    case FETCH_PUBLIC_WELCOME_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export { exampleReducer };
