const User = require("./userModel");
const bcrypt = require('bcryptjs');

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(200).send({user: newUser})
  } catch (error) {
    console.log(error)
    res.status(500).send({error: error.message})
  }
}

exports.login = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.findOne({ email });
    if (newUser) {
      const validPass = await bcrypt.compare(password, newUser.password);
      if (validPass) {
        res.status(200).send({message: "Login is successful"})
      } else {
        res.status(500).send({message: "Incorrect password"})
      }
    } else {
      res.status(500).send({message: "Entered wrong email"})
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({error: error.message})
  }
}