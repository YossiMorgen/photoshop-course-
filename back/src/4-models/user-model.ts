import Joi from "joi";
import RoleModel from "./role-model";
import { UploadedFile } from "express-fileupload";

class UserModel {

    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role: RoleModel;
    public image: UploadedFile;
    public imageName: string;
    public description: string;

    public constructor(user: UserModel) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
        this.image = user.image;
        this.imageName = user.imageName;
        this.description = user.description;
    }

    public static ValidationSchema = Joi.object({
        id: Joi.number().optional().integer().positive(),
        firstName: Joi.string().required().min(2).max(17),
        lastName: Joi.string().required().min(2).max(17),
        email: Joi.string().required().min(2).max(30),
        password: Joi.string().required().min(2).max(17),
        role: Joi.forbidden(),
        image: Joi.object().optional(),
        imageName: Joi.string().optional().min(6),
        description: Joi.string().required().min(1).max(2000)
    })

    public validation():string{
        const res = UserModel.ValidationSchema.validate(this);
        return res.error?.message;
    }


}

export default UserModel;