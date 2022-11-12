
import { useState } from 'react';
import './SignIn.css';

function SignIn() {

  let form = {
    "fields": {
      "email": {
        value: '',
      },
      "password": {
        value: '',
      },
    },
  }

  let {fields, setFields} = useState(form.fields);

  // let update = e => {
  //   let name = e.target.name;
  //   let val = e.target.value;

  //   setFields({...fields, [name]: val})
  // }

  console.log(fields);

  // return (
  //   <div className="SignIn">
  //       <form>
  //           <label>
  //             <div>Email</div>
  //             <input name='email' type='email' value={fields.email.value} onChange={update}/>
  //           </label>
            
  //           <label>
  //             <div>Password</div>
  //             <input name='password' type='text' value={fields.password.value} onChange={update}/>
  //           </label>
  //           <br/>

  //           <button>Send</button>
  //       </form>
  //   </div>
  // );
}

export default SignIn;
