const bcrypt = require('bcryptjs');

exports.hashPass = async (req, res, next) => {
  try {
    // const tempPass = req.body.pass;
    // const hashedPass = await bcrypt.hash(tempPass, 8);
    // req.body.password = hashedPass;
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (error) {
    console.log(error)
    res.status(500).send({error: error.message})
  }
}

exports.decryptPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.compare(req.body.password, 8);
    next();
  } catch (error) {
    console.log(error)
    res.status(500).send({error: error.message})
  }
}