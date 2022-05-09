import db from "../db.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';


const makeLogin = async (req,res) => {
  const { email,password } = req.body;

  try {
    res.sendStatus(200);

  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export default makeLogin;