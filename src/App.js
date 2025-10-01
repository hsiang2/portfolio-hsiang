import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/work/:projectId' element={<DetailPage />} /> */}
        <Route path='about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
