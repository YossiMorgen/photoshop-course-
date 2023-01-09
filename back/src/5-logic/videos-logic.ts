import dal from "../2-utils/dal";
import { VideoModel } from "../4-models/video-model";
import { v4 as uuidv4 } from "uuid"
import path from 'path'
import { ValidationErrorModel } from "../4-models/error-models";
import { OkPacket } from "mysql";

async function getAllVideos():Promise<VideoModel[]> {
    const sql = `
    SELECT * FROM videos;`
    const videos = await dal.execute(sql);
    return videos;
}

async function addVideo(video:VideoModel): Promise <VideoModel> {
    const err = video.validation();

    if(err) throw new ValidationErrorModel(err);

    const sql = `INSERT INTO videos VALUES (DEFAULT, 'dfghjk', 'cfvgbhnj')`

    const info:OkPacket = await dal.execute(sql);
    video.id = info.insertId
    return video;
}



export default {
    getAllVideos,
    addVideo
    
}