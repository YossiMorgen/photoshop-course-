import axios from 'axios';
import { useState } from 'react';
import appConfig from '../../Config/appConfig';
import './Setting.css'
import useTitle from "../../Services/useTitle";
import useAuth from '../../Services/useAuth';

function Setting(){
    useTitle('setting');
    const languages = ["ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "sv", "ud", "zh"]
    const countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th"]
    const auth = JSON.parse(sessionStorage.getItem('user'));
    const {loginUser} = useAuth();
    const form = {
        language: '', 
        country: '',
    }

    

    const [data, setData] = useState(form);
    // const [err, setErr] = useState('');

    const update = e => {
        const val = e.target.value;
        const name = e.target.name;
        setData({ ...data, [name]: val });
    }

    const valid = ()=>{
        for (const key in data) {
            if(data[key] !== ""){
                return true;
            }
        }
        return false;
    }

    const send = e => {
        e.preventDefault();
        if(!valid()){
            console.log("please enter some info to search")
          return;
        }
        let newInfo = {};
        for (const key in data) {
            data[key] !== '' && (newInfo[key] = data[key])
        }
        console.log(newInfo);
        const newUser = {...JSON.parse(auth.config.data), ...auth.data.user,  ...newInfo}
        console.log(newUser);
        axios.put(appConfig.users + "/" + auth.data.user.id, newUser)
            .then(response => {
                loginUser( response);
            })
            .catch(err => console.log("error " + err))



    }

    return(
        <div className='Setting'>
            <h2> Default Search:</h2>
            <hr/>
            <form onSubmit={send}>
                <br/>
                <label>
                    <span>language</span><br/>
                    <select
                    value={data.language}
                    onChange={update}
                    name='language'
                    >
                        <option value=''>--choose--</option>
                        {languages.map((language, index) => <option key={index} value={language} >{language}</option>)}
                    </select>
                </label>
                
                <br/>
                <label>
                    <span>country</span><br/>
                    <select
                    value={data.country}
                    onChange={update}
                    name='country'
                    >
                        <option value=''>--choose--</option>
                        {countries.map((country, index) => <option key={index} value={country} >{country}</option>)}
                    </select>
                </label>

                <br />
                <button >Update </button>
                
                <br />
                {/* <span>{err}</span> */}
            </form>
        </div>
    )
}

export default Setting;