import axios from 'axios';
import { KANBAN_SERVICE_API } from './api';
import { urlAPI } from './api';

interface IUserCreds {
  id: string;
  name: string;
  login: string;
}

interface IToken {
  token: string;
}

export const signUpRequest = (data: { [x: string]: unknown }): Promise<void> => {
  console.log(data);
  console.log(urlAPI.signUp);
  return axios
    .post(KANBAN_SERVICE_API + urlAPI.signUp, data)
    .then((response) => {
      console.log(response.data);
      saveCreds(response.data);
    })
    .catch((error) => {
      throw `ERROR: ${error.response.data.message}`;
    });
};

export const signInRequest = (data: { [x: string]: unknown }) => {
  delete data.name;
  console.log(data);
  console.log(urlAPI.signIn);
  return axios
    .post(KANBAN_SERVICE_API + urlAPI.signIn, data)
    .then((response) => {
      console.log(response.data);
      saveToken(response.data);
    })
    .catch((error) => {
      throw `ERROR: ${error.response.data.message}`;
    });
};

export const userUpdateRequest = (data: { [x: string]: unknown }) => {
  const credsData: IUserCreds = getCreds();
  return axios
    .put(KANBAN_SERVICE_API + urlAPI.users + credsData.id, data, getConfig())
    .then((response) => {
      console.log(response.data);
      saveCreds(response.data);
    })
    .catch((error) => {
      throw `ERROR: ${error.response.data.message}`;
    });
};

export const userDeleteRequest = () => {
  const credsData: IUserCreds = getCreds();
  const token = getToken();
  console.log('token', token);
  return axios
    .delete(KANBAN_SERVICE_API + urlAPI.users + credsData.id, getConfig())
    .then(() => {
      localStorage.clear();
    })
    .catch((error) => {
      throw `ERROR: ${error.response.data.message}`;
    });
};

function saveToken(token: IToken) {
  localStorage.setItem('tokenData', JSON.stringify(token));
}

function getToken(): string {
  const tokenData: IToken = JSON.parse(localStorage.getItem('tokenData') as string);
  return tokenData.token;
}

function saveCreds(creds: IUserCreds) {
  localStorage.setItem('credsData', JSON.stringify(creds));
}

function getCreds(): IUserCreds {
  return JSON.parse(localStorage.getItem('credsData') as string);
}

function getConfig() {
  return {
    headers: {
      Authorization: 'Bearer ' + getToken(),
    },
  };
}
