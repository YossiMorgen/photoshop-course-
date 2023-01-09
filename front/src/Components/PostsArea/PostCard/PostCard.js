import { Link } from 'react-router-dom';
import './PostCard.css'
import appConfig from '../../Config/appConfig';

function PostCard({ post }) {

    return (
        <div className="PostCard" style={{backgroundImage: `url(${post.url === null ? '' : appConfig.path + '/' + post.url })`}}>
            
            <p>{post.body}</p>
        </div>
    )
}
export default PostCard;