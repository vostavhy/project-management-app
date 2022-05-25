import axios from 'axios';
import { KANBAN_SERVICE_API } from './api';
import { path } from './enums';

interface IUserCreds {
  id: string;
  name: string;
  login: string;
}

export const signUpRequest = (data: { [x: string]: unknown }) => {
  console.log(data);
  console.log(path.signUp);
};

export const signInRequest = (data: { [x: string]: unknown }) => {
  console.log(data);
  console.log('sign in');
  axios.post(KANBAN_SERVICE_API + path.signIn);
};

function saveToken(token: string) {
  localStorage.setItem('tokenData', token);
}

function saveUserCreds(creds: IUserCreds) {
  localStorage.setItem('userCreds', JSON.stringify(creds));
}
