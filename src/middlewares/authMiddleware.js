import authSchema from "../schema/authShema.js";

const authMiddleware = async (req,res,next) => {
  const  user = req.body;

  const validation = authSchema.validate(user, { abortEarly: true });
  if (validation.error) {
    console.log(validation.error.details.map(detail => detail.message));
    res.status(422).send("There was a login error, please fill in the information correctly!");
    return;
  }
  next();
}

export default authMiddleware;