import { Route, Routes } from "react-router-dom";
import Videos from "../../Pages/Videos/Videos";
import Posts from "../../Pages/Posts/Posts";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SignIn from "../../AuthArea/SignIn/SignIn";

function CourseRouter(){
    const {auth} = useContext(AuthContext);
    return(
        <Routes>
            {!auth.data && 
                <Route path="*" element={<SignIn/>} />
            }
            {auth.data &&
            <>
            <Route path='/videos' element={<Videos/>} /> 
            <Route path='/posts' element={<Posts/>} /> 
            <Route path='/videos/:id' element={<Videos/>} /> 
            </> 
            }
        </Routes>
    )
}

export default CourseRouter;