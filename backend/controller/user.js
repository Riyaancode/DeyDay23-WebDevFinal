const User = require("../models/user");

// Signup a new user
const createNewUser = async (req,res) => {
    // console.log("req.body: ", req.body);
  const newUser = await new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// Signin user
let userAuthCheck;
const signinUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      res.send(user);
      userAuthCheck = user;
    } else {
      res.status(401).send("Invalid Credentials");
      userAuthCheck = null;
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// get user details for login user;
const checkLoginUser = () => {
    res.send(userAuthCheck)
}

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { createNewUser, signinUser, checkLoginUser,  getAllUsers };
