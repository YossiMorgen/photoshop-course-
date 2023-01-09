import './Loggin.css';

import axios from "axios";
import { useRef, useState } from "react";
import appConfig from "../../Config/appConfig";
import useAuth from '../../Services/useAuth';


function Loggin() {

    const { loginUser } = useAuth();

    const form = {
        email: '',
        password: '',
    }

    const button = useRef();
    const loading = () => button.current.classList.toggle('load');

    const [data, setData] = useState(form);
    const [err, setErr] = useState('');

    const update = e => {
        const val = e.target.value;
        const name = e.target.name;
        setData({ ...data, [name]: val });
    }

    const send = e => {
        e.preventDefault();

        loading()
        setErr('');
        console.log(data);
        axios.post(appConfig.login, data)
            .then(response => loginUser(response))
            .catch(err => setErr(err.response.data))
            .finally(loading());
    }


    return (
        <div className="Loggin">

            <form className="form card" onSubmit={send}>
                <div className="card_header">
                    <h1 className="form_heading">Login</h1>
                </div>
                <label className='field'>
                    <span>Email</span><br/>
                    <input className="input" type="text" name='email' value={data.email} onChange={update} />
                </label>
                <br/>
                <label className='field'>
                    <span>Password</span><br/>
                    <input className="input" type="text" name='password' value={data.password} onChange={update} />
                </label>

                <br />
                <button className="button" ref={button} > <span className='buttonSpan'>Send</span> <span className="loaderButton"></span></button>

                <br />
                <span>{err}</span>

            </form>

        </div >
    )
}
export default Loggin