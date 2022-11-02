import { Router } from '@mui/icons-material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import PageFoundation from './components/pages/pageFondation/PageFoundation';
import PageHome from './components/pages/pageHome/PageHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
        <Route path="/" element={<PageHome />} />
        <Route path="/foundation" element={<PageFoundation />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
