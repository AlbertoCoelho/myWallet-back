import db from "../db.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

const token = uuid();

const makeSignUp = async () => {
  // nome, email, senha, confirmação de senha
  const user = req.body;
  const passwordHash = bcrypt.hashSync(user.password, 10);

  try {
    await db.collection('users').insertOne({ ...user, password: passwordHash }); 
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

// const makeLogin = async () => {
//   try {

//   } catch (e) {
//     console.log(e);
//     res.sendStatus(500);
//   }
// }

export {
  makeSignUp
}