/*
  Data downloading using pure JS fetch
  @type: JS object
  { result: resultObj, error: errorObj }
*/

// NOTE: add some default options like headers here
const defaultRequestOptions = {
  headers: {
    // 'Content-Type': 'application/json',
  },
};

export function fetchRequest(path, customOptions) {
  const options = Object.assign({}, defaultRequestOptions, customOptions);
  const request = new Request(path, options);

  return fetch(request)
    .then((response) => (
      response.json().then((result) => ({ result }))
    ))
    .catch((error) => ({ error }));
}

export default fetchRequest;
