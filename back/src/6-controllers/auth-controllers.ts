import express, { NextFunction, Request, Response } from "express";
import CredetialsModel from "../4-models/credetials-model";
import UserModel from "../4-models/user-model";
import authLogic from "../5-logic/auth-logic";
import verifyAdmin from "../3-middleware/verify-admin";

const router = express.Router(); // Capital R


// POST register
router.post('/auth/register', async (request: Request, response: Response, next: NextFunction) => {

    try {
        request.body.image = request.files?.image;
        const user = new UserModel(request.body);
        console.log(request.files?.image);
        
        const res = await authLogic.register(user);
        response.status(201).json(res);

    } catch (error) {
        next(error)
    }

});

// POST login
router.post('/auth/login', async (request: Request, response: Response, next: NextFunction) => {

    try {

        const credetials = new CredetialsModel(request.body);
        const res = await authLogic.login(credetials);
        response.json(res);

    } catch (error) {
        next(error);
    }

});

router.delete('/auth/deleteuser/:id', verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {

    try {
        const id = +request.params.id;
        await authLogic.deleteUser(id)
        response.sendStatus(204);
    } catch (error) {
        next(error);
    }

})

export default router;