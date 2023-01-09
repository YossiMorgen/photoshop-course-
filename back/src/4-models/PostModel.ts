import Joi from "joi";
import { UploadedFile } from "express-fileupload";

class imageModel{
    public image: UploadedFile;
    public imageName: string;
    public constructor(img: imageModel) {
        this.image = img.image;
        this.imageName = img.imageName;
    }
}

export class PostModel{
    public id: number;
    public userId: number;
    public body: string;
    public time: Date;
    public comments: PostModel[];
    public commentTo: number;
    public postId: number;
    public images: imageModel[];

    public constructor(post: PostModel){
        this.id = post.id;
        this.userId = post.userId;
        this.body = post.body;
        this.time = post.time;
        this.comments = post.comments;
        this.commentTo = post.commentTo;
        this.postId = post.postId;
        this.images = post.images;
    }
    public static validationSchema = Joi.object({
        id: Joi.number().optional().integer().positive(),
        postId: Joi.number().optional().integer().positive(),
        commmentTo: Joi.number().optional().integer(),
        userId: Joi.number().optional().integer().positive(),
        body: Joi.string().required().min(1).max(2000),
        time: Joi.required(),
        comments: Joi.string().optional(),
        images: Joi.array().optional(),
    })

    public validation():string{
        const res = PostModel.validationSchema.validate(this);
        return res.error?.message;
    }
}