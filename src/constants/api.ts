import axios from 'axios';
import { path } from './enums';

export const SWAGGER_API = 'https://sleepy-ocean-36153.herokuapp.com/docs/static/index.html#/';
export const KANBAN_SERVICE_API = 'https://sleepy-ocean-36153.herokuapp.com/';

interface IUserCreds {
  id: string;
  name: string;
  login: string;
}

export const signUpRequest = (data: { [x: string]: unknown }) => {
  console.log(data);
  axios.post(KANBAN_SERVICE_API + path.signUp);
  console.log(path.signUp);
};

export const signInRequest = (data: { [x: string]: unknown }) => {
  console.log(data);
  console.log('sign in');
};

function saveToken(token: string) {
  localStorage.setItem('tokenData', token);
}

function saveUserCreds(creds: IUserCreds) {
  localStorage.setItem('userCreds', JSON.stringify(creds));
}
