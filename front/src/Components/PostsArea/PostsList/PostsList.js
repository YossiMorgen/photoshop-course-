import PostCard from "../PostCard/PostCard";

function PostsList({ posts }) {

    console.log(posts.data);
    return (
        <div className="PostsList">
            {posts.data.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    )
}
export default PostsList;