import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from '../containers/WelcomePage';
import NotFoundPage from '../containers/NotFoundPage';
import SignUpInPage from '../containers/SignUpInPage';
import MainPage from '../containers/MainPage';
import BoardPage from '../containers/BoardPage';
import { Layout } from '../components/Layout';
import { signInRequest, signUpRequest } from '../constants/api';
import UserUpdatePage from '../containers/UserUpdatePage';
import { path } from '../constants/enums';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Routes>
          <Route path={path.home} element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route
              path={path.signUp}
              element={<SignUpInPage name='Sign UP' apiRequest={signUpRequest} isName={true} />}
            />
            <Route
              path={path.signIn}
              element={<SignUpInPage name='Sign IN' apiRequest={signInRequest} isName={false} />}
            />
            <Route path={path.userUpdate} element={<UserUpdatePage />} />
            <Route path={path.main} element={<MainPage />} />
            <Route path={path.board} element={<BoardPage />} />
            <Route path={path.notFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
