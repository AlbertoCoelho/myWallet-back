import db from "../db";
import bcrypt from 'bcrypt';

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

export default makeSignUp;