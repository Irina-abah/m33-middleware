const { Router } = require("express");
const { addUser, login } = require("./userControllers");
const { hashPass } = require("../middleware/index");
const userRouter = Router();

userRouter.post("/users", hashPass, addUser);
userRouter.post("/signin", login);

module.exports = userRouter;