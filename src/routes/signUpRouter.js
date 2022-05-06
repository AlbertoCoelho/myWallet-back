import { Router } from 'express';
import { makeSignUp } from '../controllers/userController.js';

const signUpRouter = Router();

signUpRouter.post('/sign-up', userMiddleware, makeSignUp);

export default signUpRouter;