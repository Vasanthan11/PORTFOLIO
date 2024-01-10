import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';

function App() {
  return (

    <div className='body'>
      <BrowserRouter>

        <Routes>

          <Route path='/' Component={HomePage} exact />

        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
