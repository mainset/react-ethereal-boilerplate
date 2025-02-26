import { FetchApiService } from './fetch-api.service';

/*
  Data downloading using pure JS fetch
  @type: JS object
  { result: resultObj, error: errorObj }
*/

// NOTE: add some default options like headers here
const defaultRequestOptions = {
  headers: {
    // TODO: do not pass {application/json}, parse JSON by default on Server Side
    'Content-Type': 'application/json',
  },
};

function fetchRequest(path: string, customOptions) {
  const options = Object.assign({}, defaultRequestOptions, customOptions);
  // const request = new Request(path, options);

  const apiService = FetchApiService.getInstance();

  return apiService
    .fetch(path, options)
    .then((response) => response.json())
    // NOTE: rethrow error to catch it in the component
    // .catch((error) => ({ error }));
}

export { fetchRequest };
