import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from '../containers/WelcomePage';
import NotFoundPage from '../containers/NotFoundPage';
import SignPage from '../containers/SignPage';
import MainPage from '../containers/MainPage';
import BoardPage from '../containers/BoardPage';
import { Layout } from '../components/Layout';
import { signInRequest, signUpRequest } from '../constants/api';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route
              path='sign-up'
              element={<SignPage name='Sign UP' apiRequest={signUpRequest} isName={true} />}
            />
            <Route
              path='sign-in'
              element={<SignPage name='Sign IN' apiRequest={signInRequest} isName={false} />}
            />
            <Route path='main' element={<MainPage />} />
            <Route path='board' element={<BoardPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
