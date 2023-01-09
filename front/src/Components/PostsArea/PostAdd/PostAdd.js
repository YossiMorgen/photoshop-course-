import { useState } from 'react';
import './PostAdd.css';
import axios from 'axios';
import appConfig from '../../Config/appConfig';

function PostAdd({ posts, setPosts }) {

    const [state, setState] = useState(0);

    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");

    const [form, setForm] = useState({
        title: '',
        body: ''
    });

    const updateVal = e => {
        let input = e.target.name;
        let val = e.target.value;
        setForm({ ...form, [input]: val })
    }

    const sendNewPost = e => {
        e.preventDefault();

        // const elements = e.target.elements
        // const title = elements.title.value;
        // const body = elements.body.value;

        // const formData = new FormData(e.target);
        // formData.append('userId', 1);

        // let data = Object.fromEntries(formData);
        // const data = {
        //     title: title,
        //     body: body
        // }

        axios.post(appConfig.posts, form)
            .then(response => {
                setPosts([...posts, ...response.data])
            })
            .catch(err => console.log(err.message))

    }

    const checkInput = e => {
        const num = +e.target.value;
        if (num >= 20) {
            return
        }
    }

    return (
        <div className="PostAdd">
        //     <form onSubmit={sendNewPost} encType='multipart/form-datas'>

        //         <label>
        //             <span>Title</span><br />
        //             <input type="text" name="title" value={form.title} onChange={updateVal} />
        //         </label>

        //         <br />

        //         {/* <label>
        //             <span>Number</span><br />
        //             <input type="number" name="number" value={number} onChange={checkInput} />
        //             {number >= 20 && <span> Hi... </span>}
        //         </label>

        //         <br /> */}

        //         <label>
        //             <span>Content </span><br />
        //             <textarea name="body" value={form.body} onChange={updateVal}></textarea>
        //         </label>

        //         <br />

        //         <button> Save post </button>

        //     </form>

        //     <br />
        //     <button onClick={() => setState(state + 1)}> Set State ({state}) </button>
        </div>
    )
}
export default PostAdd;