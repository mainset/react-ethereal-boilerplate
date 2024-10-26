import {
  FETCH_WELCOME_DATA,
  FETCH_WELCOME_DATA_ERROR,
  FETCH_WELCOME_DATA_SUCCESS,
} from './constants';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WELCOME_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WELCOME_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.data,
      };
    case FETCH_WELCOME_DATA_ERROR:
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
