
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Loggin from '../../Pages/Loggin/Loggin';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';
import Products from '../../Pages/Products/Products';
import SignIn from '../../Pages/SignIn/SignIn';
import './Main.css';

function Main() {
  return (
    <main className="Main">
        <Routes>
            <Route path='/home' element={<Home/>} /> 
            <Route path='/products' element={<Products/>}/> 
            <Route path='/loggin' element={<Loggin/>}/> 
            <Route path='/sign_in' element={<SignIn/>}/> 
            <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
    </main>
  );
} 

export default Main;
