import { NextFunction, Request, Response } from "express";
import cyber from "../2-utils/cyber";
import { AuthErrorModel } from "../4-models/error-models";

async function verifyAdmin(request: Request, response: Response, next: NextFunction) {

    try {

        const isValid = await cyber.verifyAdmin(request);
        if (!isValid) throw new AuthErrorModel('Unauthrized: you are not admin');
        next();

    } catch (error) {
        next(error)
    }

}
export default verifyAdmin;