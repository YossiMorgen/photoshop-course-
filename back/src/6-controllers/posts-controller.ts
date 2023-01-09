import express, { NextFunction, Request, Response } from "express";
import postsLogic from "../5-logic/posts-logic";
import { PostModel } from "../4-models/PostModel";
import verifyLoggedIn from "../3-middleware/verify-logged-in";

const router = express.Router();

router.get('/posts', verifyLoggedIn,  async (request: Request, response: Response, next: NextFunction) => {
    try {
        const posts = await postsLogic.getAllPosts();  
        response.send(posts);
    } catch (error) {
        next(error);
    }
})

router.get('/commentsforpost/:id', verifyLoggedIn,  async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        const posts = await postsLogic.getAllCommentsForPost(id);  
        response.send(posts);
    } catch (error) {
        next(error);
    }
})

// router.post('/posts/', async (request: Request, response: Response, next: NextFunction) => {
//     try {

//         request.body.images = request.files?.images;

//         const post = new PostModel(request.body);

//         post.postId = +request.query.postId || 0;

//         post.commentTo = +request.query.commentTo || 0;

//         post.time = new Date();
//         console.log(request.body.images);
        
//         const newpost = await postsLogic.addpost(post);

//         response.status(201).send(newpost);
        
//     } catch (error) {
//         next(error);
//     }
// })



export default router;