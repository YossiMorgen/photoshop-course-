import { OkPacket } from "mysql";
import cyber from "../2-utils/cyber";
import dal from "../2-utils/dal";
import CredetialsModel from "../4-models/credetials-model";
import { AuthErrorModel, ResourceAlreadyExistErrorModel, ValidationErrorModel } from "../4-models/error-models";
import RoleModel from "../4-models/role-model";
import UserModel from "../4-models/user-model";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import fileHandler from "../2-utils/file-handler";

async function register(user: UserModel): Promise<object> {

    const err = user.validation();
    if(err) throw new ValidationErrorModel(err);
    user.role = RoleModel.User;

    if(user.image){     
        user.imageName = await fileHandler.saveFile(user.image);
        delete user.image;
    }

    const sql =  `
    INSERT INTO users VALUES 
    (DEFAULT, '${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}', '${user.role}', '${user.imageName}', '${user.description}');
    `;
    const info:OkPacket = await dal.execute(sql);

    user.id = info.insertId;

    const token = cyber.getNewToken(user);

    return {token, user};

}



async function login(credetials: CredetialsModel): Promise<object> {
    
    const err = credetials.validation();
    if(err) throw new ValidationErrorModel(err);

    const sql = `
    SELECT *
    FROM users 
    WHERE Email = '${credetials.email}' AND Password = '${credetials.password}';
    `

    const users = await dal.execute(sql);
    const user = users[0];
    
    if (!user) throw new AuthErrorModel('.userName or password incorrect');

    const token = cyber.getNewToken(user);

    return {token, user};

}
async function deleteUser(id:number):Promise<void> {
    const sql = `DELETE FROM users WHERE userId = ${id};`
    await dal.execute(sql);
}


export default {
    register,
    login,
    deleteUser
}