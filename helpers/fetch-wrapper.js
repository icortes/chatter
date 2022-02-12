import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

/*************************helper functions **********************/

// return auth header with jwt if user is logged in and request is to the api url
function authHeader(url) {
}
