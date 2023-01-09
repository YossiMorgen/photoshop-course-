
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loggin from '../../AuthArea/Loggin/Loggin';
import SignIn from '../../AuthArea/SignIn/SignIn';
import AuthContext from '../../Context/AuthContext/AuthContext';
import Home from '../../Pages/Home/Home';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';
import Setting from '../../Pages/Setting/Setting';
import Videos from '../../Pages/Videos/Videos';
import './Main.css';
import CourseRouter from '../../CourseArea/CourseRouter/CourseRouter';
import UserDetails from '../../UserArea/UserDetails/UserDetails';

function Main() {
  const {auth} = useContext(AuthContext);
  return (
    <main className="Main">
        <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/home' element={<Home/>} /> 
        <Route path='/coursearea/*' element={<CourseRouter/>} />                   
        <Route path='/userarea' element={<UserDetails/>} />                   
        <Route path='/loggin' element={<Loggin/>}/> 
        <Route path='/sign_in' element={<SignIn/>}/> 
        <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    </main>
  );
}

export default Main;
