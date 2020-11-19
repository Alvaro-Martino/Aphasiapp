const USER = require("../models/user");
const bcrypt = require("bcryptjs");

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  const user = await USER.find();
  res.json(user);
};

userCtrl.getUser = async (req, res) => {
  const user = await USER.findById(req.params.id);
  res.json(user);
};

userCtrl.createUser = async (req, res) => {
  req.body.pass = bcrypt.hashSync(req.body.pass);
  const user = new USER(req.body);
  await user.save();
  res.json({
    status: "Saved",
  });
};

userCtrl.editUser = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
  };
  await USER.findByIdAndUpdate(req.params.id, { $set: user }, { new: true });
  res.json({ status: "user update" });
};

userCtrl.deleteUser = async (req, res) => {
  await USER.findByIdAndRemove(req.params.id);
  res.json({ status: "user delete" });
};

userCtrl.login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await USER.findOne({ email: email });
    console.log(existingUser);
  } catch (err) {
    //const error = new HttpError(
    console.log("Loggin in failed, please try again later.");
    //);
    return next(err);
  }
  try {
    const passwordEncripted = await bcrypt.compare(password, existingUser.pass);
    console.log(passwordEncripted);
    if (!existingUser || !passwordEncripted) {
      res.json({
        message: "Credenciales invalidas, intente nuevamente",
        user: {},
      });
      //const error = new Error("Invalid credentials, could not log you in.");
      //return next(error);
    }
  } catch (error) {
    console.log(error);
  }

  res.json({
    message: "Logged in!",
    user: existingUser.toObject({ getters: true }),
  });
};

module.exports = userCtrl;
