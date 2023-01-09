import axios from "axios";
import { useState } from "react";
import appConfig from "../../Config/appConfig";
import useAuth from "../../Services/useAuth";
// import useAuth from "../../Services/useAuth";
import './SignIn.css'


function SignIn() {
    const { loginUser } = useAuth();
    
    const form = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        image: '',
        description: ''
    }
    
    // const [file, setFile] = useState({});

    // const handleFileChange = (e) => {
    //   if (e.target.files) {
    //     setFile(new File(e.target.files[0]));
    //     setData({ ...data, image: file});
    //   }
    // };

    const update = e => {
        const val = e.target.value;
        const name = e.target.name;
        setData({ ...data, [name]: val });
    }

    const [data, setData] = useState(form);
    const [err, setErr] = useState('');

    const send = e => {
        e.preventDefault();
        setErr('');

        const formData = new FormData(e.target);
        formData.append("file", data.image )

        axios.post(appConfig.register, formData)
            .then(response => loginUser(response))
            .catch(err => setErr(err.response.data))
    }


    return (
        <div className="SignIn">

            <form className="form card" onSubmit={send}>

                <label  className="field">
                    <span>Email</span><br/>
                    <input className="input" type="text" name='email' value={data.email} onChange={update} />
                </label>
                <br/>
                <label  className="field">
                    <span>Password</span><br/>
                    <input className="input" type="text" name='password' value={data.password} onChange={update} />
                </label>
                <br/>
                <label  className="field">
                    <span>First Name</span><br/>
                    <input className="input" type="text" name='firstName' value={data.firstName} onChange={update} />
                </label>
                <br/>
                <label  className="field">
                    <span>Last Name</span><br/>
                    <input className="input" type="text" name='lastName' value={data.lastName} onChange={update} />
                </label>    
                <label  className="field">
                    <span>Description</span><br/>
                    <input className="input" type="text" name='description' onChange={update}/>
                </label>
                <label  className="field">
                    <span>Profile Image</span><br/>
                    <input className="button" type="file" name='image' onChange={update} accept="image/png, image/jpeg" />
                </label>           

                <br />
                <button className="button" >SignIn </button>

                <br />
                <span>{err}</span>

            </form>

        </div >
    )
}
export default SignIn