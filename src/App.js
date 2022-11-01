import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import PageHome from './components/pages/pageHome/PageHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <PageHome />
      </BrowserRouter>
    </div>
  );
}

export default App;
