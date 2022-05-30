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
  return axios
    .post(KANBAN_SERVICE_API + urlAPI.signUp, data)
    .then(() => {})
    .catch((error) => {
      throw `ERROR: ${error.response.data.message}`;
    });
};

export const signInRequest = (data: { [x: string]: unknown }) => {
  delete data.name;
  return axios
    .post(KANBAN_SERVICE_API + urlAPI.signIn, data)
    .then((response) => {
      saveToken(response.data);
      refreshCreds(data.login as string);
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
      saveCreds(response.data);
    })
    .catch((error) => {
      throw `ERROR: ${error.response.data.message}`;
    });
};

export const userDeleteRequest = () => {
  const credsData: IUserCreds = getCreds();
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

export function getToken(): string {
  const tokenData: IToken = JSON.parse(localStorage.getItem('tokenData') as string);
  return tokenData.token;
}

function saveCreds(creds: IUserCreds) {
  localStorage.setItem('credsData', JSON.stringify(creds));
}

export function getCreds(): IUserCreds {
  return JSON.parse(localStorage.getItem('credsData') as string);
}

function refreshCreds(login: string) {
  axios
    .get(KANBAN_SERVICE_API + 'users', getConfig())
    .then((response) => {
      const creds = response.data.filter((item: IUserCreds) => {
        return item.login === login;
      })[0];
      saveCreds(creds);
    })
    .catch(() => {});
}

function getConfig() {
  return {
    headers: {
      Authorization: 'Bearer ' + getToken(),
    },
  };
}
