import db from "../db.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

const token = uuid();

const makeSignUp = async (req,res) => {
  const user = req.body;
  
  const passwordHash = bcrypt.hashSync(user.password, 10);

  try {
    await db.collection('users').insertOne({ ...user, password: passwordHash, passwordConfirmation: passwordHash }); 
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

const getUsers = async (req,res) => {
  try {
    const participantsCollection = db.collection("users");
    const participants = await participantsCollection.find().toArray();
    res.send(participants);
  } catch(e) {
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

const modulesUserController = {makeSignUp,  getUsers };
export default modulesUserController;