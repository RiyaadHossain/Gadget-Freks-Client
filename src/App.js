
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Navbar from './Components/Navbar/Navbar';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/home' element={<Home/> }/>
        <Route path='/products' element={<Products/> }/>
        <Route path='/addproduct' element={<AddProduct/> }/>
        <Route path='/orderlist' element={<Orders/> }/>
        <Route path='/login' element={<LogIn/> }/>
      </Routes>
    </div>
  );
}

export default App;
