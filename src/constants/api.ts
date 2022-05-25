export const SWAGGER_API = 'https://sleepy-ocean-36153.herokuapp.com/docs/static/index.html#/';
export const KANBAN_SERVICE_API = 'https://sleepy-ocean-36153.herokuapp.com/';

interface ICreds {
  id: string;
  name: string;
  login: string;
}

export const signUpRequest = (data: { [x: string]: unknown }) => {
  console.log(data);
  console.log('sign up');
};

export const signInRequest = (data: { [x: string]: unknown }) => {
  console.log(data);
  console.log('sign in');
};

function saveToken(token: string) {
  localStorage.setItem('tokenData', token);
}

function saveUserCreds(creds: ICreds) {
  localStorage.setItem('userCreds', JSON.stringify(creds));
}
