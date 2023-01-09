import Joi from "joi";

export class VideoModel{
    public videoLink: string;
    public videoName: string;
    public id: number;

    public constructor(video: VideoModel) {
        this.videoLink = video.videoLink;
        this.videoName = video.videoName;
        this.id = video.id;
    }

    public static validationSchema = Joi.object({
        id: Joi.number().positive().optional().integer(),
        videoName: Joi.string().min(2).max(20).required(),
        videoLink: Joi.string().min(10).max(70).required()
    })

    public validation():string{
        const res = VideoModel.validationSchema.validate(this);
        return res.error?.message;
    }
}

