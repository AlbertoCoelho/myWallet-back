import express, {json} from 'express';
import cors from 'cors';
import chalk from 'chalk';
import joi from 'joi';

import { makeSignUp } from './controllers/authController';

const server = express();
server.use(json());
server.use(cors());


app.post('/sign-up', makeSignUp);


const port = process.env.PORT;
server.listen(port, () => {
  console.log(chalk.bold.green(`Running on http://localhost:${port}`));
})