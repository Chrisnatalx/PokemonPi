import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Landing } from './views/Landing';
import { Home } from './views/home/Home';
import { Detail } from './views/detail/Detail';
import { Form } from './views/form/Form';
import { Navbar } from './components/navbar/Navbar';

function App() {

  const location = useLocation()

  return (

    <>
      <div className="container-app">
        {location.pathname !== '/' && (
          <Navbar />
        )}

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>

    </>

  );
}

export default App;
