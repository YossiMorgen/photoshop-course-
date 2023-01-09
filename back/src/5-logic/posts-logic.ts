import { OkPacket } from "mysql";
import dal from "../2-utils/dal"
import { PostModel } from "../4-models/PostModel";
import { ValidationErrorModel } from "../4-models/error-models";
import commentsTree from "../2-utils/comments-tree";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import fileHandler from "../2-utils/file-handler";

async function getAllPosts():Promise<PostModel[]>{
    const sql = `SELECT id, userId, body, time, url, posts.postID, commentTo 
    FROM posts 
    LEFT JOIN links 
    ON posts.id = links.postID 
    WHERE CommentTo = 0 
    ORDER BY posts.ID`;
    const posts = await dal.execute(sql);
    return posts;
}
async function getAllCommentsForPost(postId:number):Promise<PostModel[]>{
    const sql = `
    SELECT id, userId, body, time, url, posts.postID, commentTo 
    FROM posts 
    LEFT JOIN links 
    ON posts.id = links.postID 
    WHERE posts.postId = ${postId} AND NOT commentTo = 0
    ORDER BY posts.ID;
    `;
    const posts = await dal.execute(sql);
    const comments = commentsTree(posts, postId);
    return comments;
}

async function addpost(post:PostModel): Promise <PostModel> {

    const err = post.validation();

    if(err) throw new ValidationErrorModel(err);

    if(post.images){
        post.images.forEach(async img => {
            img.imageName = await fileHandler.saveFile(img.image);
            delete img.image;
        });
    }

    const sql = `INSERT INTO posts VALUES (DEFAULT, '${post.userId}', '${post.body}', '${post.time}', '${post.commentTo}', '${post.postId}');`
    
    const info:OkPacket = await dal.execute(sql);

    post.id = info.insertId;
    
    let linksSql = `INSERT INTO links VALUES (DEFAULT, ${post.id}, '${post.images[0].imageName}')`
    
    for(let i = 1; i < post.images.length; i++){
        linksSql += `, (DEFAULT, ${post.id}, '${post.images[i].imageName}')`
    }

    const linksInfo:OkPacket = await dal.execute(sql);

    
    return post;
}



export default {
    getAllPosts,
    getAllCommentsForPost,
    addpost
}