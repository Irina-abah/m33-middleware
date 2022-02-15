const { Router } = require("express");
const { addUser } = require("./userControllers");
const { hashPass } = require("../middleware/index");
const userRouter = Router();

userRouter.post("/users", hashPass, addUser);

module.exports = userRouter;