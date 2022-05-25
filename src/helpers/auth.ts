import axios from 'axios';
import { KANBAN_SERVICE_API } from './api';
import { urlAPI } from './api';

// user
// user123

// admin123
// admin123

interface IUserCreds {
  id: string;
  name: string;
  login: string;
}

interface IToken {
  token: string;
}

export const signUpRequest = (data: { [x: string]: unknown }) => {
  console.log(data);
  console.log(urlAPI.signIn);
  axios
    .post(KANBAN_SERVICE_API + urlAPI.signUp, data)
    .then((response) => {
      if (response.status === 201) {
        console.log(response.data);
        saveUserCreds(response.data);
      } else {
        console.log(response);
      }
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
};

export const signInRequest = (data: { [x: string]: unknown }) => {
  console.log(data);
  console.log(urlAPI.signIn);
  axios
    .post(KANBAN_SERVICE_API + urlAPI.signIn, data)
    .then((response) => {
      if (response.status === 201) {
        console.log(response.data);
        saveToken(response.data);
      } else {
        console.log(response);
      }
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
};

function saveToken(token: IToken) {
  localStorage.setItem('tokenData', JSON.stringify(token));
}

function saveUserCreds(creds: IUserCreds) {
  localStorage.setItem('userCreds', JSON.stringify(creds));
}
