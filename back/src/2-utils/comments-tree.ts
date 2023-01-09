import { PostModel } from "../4-models/PostModel";

function commentsTree(posts:PostModel[], postId: number):PostModel[]{
    const comments = posts.filter(p => p.commentTo === postId);

    comments.forEach(comment => {
        comment.comments = commentsTree(posts, comment.id)
    });

    return comments;
}

// function commentTree2(posts:PostModel[], postId: number):PostModel{
//     const map = new Map();
//     posts.forEach(p => {
//         map.set(p.id, p)
//     });
//     posts.forEach(p =>{
//         if(p.postId !== p.commentTo){
//             const commentTo = map.get(p.commentTo )
//             if(commentTo.comments == null ){
//                 commentTo.comments = [];
//             }
//             commentTo.comments.push(p)
//         }
//     });
//     return map.get(postId)
// }

export default commentsTree;