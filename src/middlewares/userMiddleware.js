import  userSchema  from '../schema/userSchema.js';

const userMiddleware = async (req,res,next) => {
  const { user } = req.headers;

  const validation = userSchema.validate(user, { abortEarly: true });
  if (validation.error) {
    console.log(validation.error.details.map(detail => detail.message));
    res.sendStatus(422);
    return;
  }
  next();
}

export default userMiddleware;