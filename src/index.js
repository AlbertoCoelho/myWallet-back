import express, {json} from 'express';
import cors from 'cors';
import chalk from 'chalk';

import  signUpRouter from './routes/signUpRouter.js';
import signInRouter from './routes/authRouter.js';

const server = express();
server.use(json());
server.use(cors());

//routes
server.use(signUpRouter);
server.use(signInRouter);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(chalk.bold.green(`Running on http://localhost:${port}`));
})