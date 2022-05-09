import { Router } from 'express';
import  makeLogin from '../controllers/authController.js';
import  authMiddleware from '../middlewares/authMiddleware.js';

const signInRouter = Router();

signInRouter.post('/', authMiddleware, makeLogin);

export default signInRouter;