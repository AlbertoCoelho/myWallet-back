import { Router } from 'express';
import { makeSignUp } from '../controllers/userController.js';
import  userMiddleware  from '../middlewares/userMiddleware.js';

const signUpRouter = Router();

signUpRouter.post('/sign-up', userMiddleware, makeSignUp);

export default signUpRouter;