import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './App.css';
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';
import SignInPage from '../containers/SignInPage';
import MainPage from '../containers/MainPage';
import BoardPage from '../containers/BoardPage';

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
