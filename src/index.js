import express, {json} from 'express';
import cors from 'cors';
import chalk from 'chalk';
import joi from 'joi';

import { signUpRouter } from './routes/signUpRouter.js';

const server = express();
server.use(json());
server.use(cors());

//routes
server.use(signUpRouter);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(chalk.bold.green(`Running on http://localhost:${port}`));
})