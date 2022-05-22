import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';
import SignInPage from '../containers/SignInPage';
import MainPage from '../containers/MainPage';
import BoardPage from '../containers/BoardPage';
import { Layout } from '../components/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="signIn" element={<SignInPage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="board" element={<BoardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
