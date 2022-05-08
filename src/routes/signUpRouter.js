import { Router } from 'express';
import  modulesUserController from '../controllers/userController.js';
import  userMiddleware from '../middlewares/userMiddleware.js';

const signUpRouter = Router();

signUpRouter.post('/sign-up', userMiddleware, modulesUserController.makeSignUp);
signUpRouter.get('/sign-up', modulesUserController.getUsers);

export default signUpRouter;