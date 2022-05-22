import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './App.css';
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';
import SignInPage from '../SignInPage';
import MainPage from '../MainPage';
import BoardPage from '../BoardPage';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="signIn" element={<SignInPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
