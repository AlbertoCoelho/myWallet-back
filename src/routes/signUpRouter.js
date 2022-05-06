import { Router } from 'express';
import { makeSignUp } from '../controllers/authController.js';

const signUpRouter = Router();

signUpRouter.post('/sign-up', makeSignUp);

export default signUpRouter;