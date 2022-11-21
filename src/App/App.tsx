import { Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from '../pages/WelcomePage';
import NotFoundPage from '../pages/NotFoundPage';
import SignUpInPage from '../pages/SignUpInPage';
import MainPage from '../pages/MainPage';
import BoardPage from '../pages/BoardPage';
import { Layout } from '../components/Layout';
import { signInRequest, signUpRequest } from '../helpers/auth';
import UserUpdatePage from '../pages/UserUpdatePage';
import { path } from '../helpers/enums';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={path.home} element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route
            path={path.signUp}
            element={
              <SignUpInPage
                name='Sign UP'
                apiRequest={signUpRequest}
                isName={true}
                redirectPath={`/${path.signIn}`}
              />
            }
          />
          <Route
            path={path.signIn}
            element={
              <SignUpInPage
                name='Sign IN'
                apiRequest={signInRequest}
                isName={false}
                redirectPath={`/${path.main}`}
              />
            }
          />
          <Route path={path.userUpdate} element={<UserUpdatePage />} />
          <Route path={path.main} element={<MainPage />} />
          <Route path={path.board} element={<BoardPage />} />
          <Route path={path.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
