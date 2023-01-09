import express, { NextFunction, Request, Response } from "express";
import verifyLoggedIn from "../3-middleware/verify-logged-in";
import videosLogic from "../5-logic/videos-logic";
import { VideoModel } from "../4-models/video-model";
import verifyAdmin from "../3-middleware/verify-admin";

const router = express.Router();

router.get('/videos' , verifyLoggedIn,  async (request: Request, response: Response, next: NextFunction) => {
    try {
        const videos = await videosLogic.getAllVideos();  
        response.send(videos);
    } catch (error) {
        next(error);
    }
})

router.post('/videos', verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {

        const video = new VideoModel(request.body);
        console.log(video);
        
        const newVideo = await videosLogic.addVideo(video);

        response.status(201).send(newVideo)
        
    } catch (error) {
        next(error);
    }
})



export default router;