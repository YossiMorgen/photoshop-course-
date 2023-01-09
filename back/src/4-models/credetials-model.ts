import Joi from "joi";

class CredetialsModel {

    public email: string;
    public password: string;

    public constructor(credetials: CredetialsModel) {
        this.email = credetials.email;
        this.password = credetials.password;
    }

    public static ValidationSchema = Joi.object({
        password: Joi.string().required().min(2).max(17),
        email: Joi.string().required().min(2).max(25),
    })

    public validation():string{
        const res = CredetialsModel.ValidationSchema.validate(this);
        return res.error?.message;
    }
}

export default CredetialsModel;