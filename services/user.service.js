import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from '../helpers/fetch-wrapper';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(
  typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user'))
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  signup,
  getUser,
};

function login(username, password) {
  return fetchWrapper
    .post(`${baseUrl}/authenticate`, { username, password })
    .then((user) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function signup(data) {
  return fetchWrapper.post(`${baseUrl}/users`, { data }).then();
}

// remove user from local storage, publish null to user subscribers and redirect to login page
function logout() {
  localStorage.removeItem('user');
  userSubject.next(null);
  Router.push('/login');
}

function getUser() {
  return fetchWrapper.get(baseUrl);
}
