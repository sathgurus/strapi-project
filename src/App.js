import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Customer } from './components/customer';
import Neworder from './components/neworder';
import { Flim } from './components/flim';
import { Review } from './components/reviews';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Customer/>}/>
      <Route path='/additem' element={<Neworder/>}/> */}
      <Route path='/'  element={<Flim/>}/>
      <Route path='/review' element={<Review/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
