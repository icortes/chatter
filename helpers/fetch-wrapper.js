import getConfig from 'next/config';
import { userService } from '../services/user.service';
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
  const user = userService.userValue;
  const isLoggedIn = user && user.token;
  const isApiUrl = url.startsWith(publicRuntimeConfig.isApiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}


