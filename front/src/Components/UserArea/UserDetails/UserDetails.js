import { useContext } from 'react';
import './UserDetails.css'
import img from '../../../Assets/Images/schoolege_30.jpg'
import AuthContext from '../../Context/AuthContext/AuthContext';
import appConfig from '../../Config/appConfig';
function UserDetails(){
    const auth = useContext(AuthContext)
    const user = auth.auth.data.user;
    console.log(appConfig.path + '/' + user.imageName);
    return(
        <div className='UserDetails'>
            <div className='personalImage' style={{backgroundImage: `url(${user.imageName === 'undefined' ? '' : appConfig.path + '/' + user.imageName })`}}></div>
            <h2>
                {user.firstName}
            </h2>
            <hr/>
        </div> 
    )
}

export default UserDetails;