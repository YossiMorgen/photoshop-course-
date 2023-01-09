import { Navigate, useNavigate, useParams } from "react-router-dom";
import appConfig from "../../Config/appConfig";
// import useFetch from "../../../Services/useFetch";

function PostSingle({ posts }) {

    const { post_id } = useParams();

    const navigate = useNavigate();

    const post = posts.filter(p => p.id == post_id)[0];

    if (!post) {
        navigate('/posts')
        // return <Navigate to='/posts' />
    }
    // const [comments] = useFetch(appConfig.posts + post_id + '/comments');

    return (
        <div className="PostSingle">
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            {/* {comments.length && <ul>
                {comments.map(c => <li><b>{c.name}</b> - {c.body}</li>)}
            </ul>} */}
        </div>
    )
}
export default PostSingle;