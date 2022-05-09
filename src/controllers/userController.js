import db from "../db.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

const token = uuid();

const makeSignUp = async (req,res) => {
  const user = req.body;
  
  const SALT = 10;
  const passwordHash = bcrypt.hashSync(user.password, SALT);
  delete user.passwordConfirmation;

  try {
    await db.collection('users').insertOne({ ...user, password: passwordHash }); 
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

const getUsers = async (req,res) => {
  try {
    const usersCollection = db.collection("users");
    const users = await usersCollection.find().toArray();
    res.send(users);
  } catch(e) {
      console.log(e);
      res.sendStatus(500);
  }
}

const modulesUserController = {makeSignUp,  getUsers };
export default modulesUserController;