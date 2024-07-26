const UserModel = require('../model/userModel.js');
console.log(UserModel);
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const findExistingUserByEmail = async (email) => {
  const user = await UserModel.findOne({ email });
  return user;
};

const verifyPassword = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compareSync(plainPassword, hashedPassword);
  return isMatch;
};

const generateJWTToken = (user) => {
  const token = jwt.sign(
    {
      exp: 120, // second
      data: {
        userId: user._id,
        email: user.email,
      },
    },
    process.env.JWT_SECRET_KEY
  );
  return token;
};

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: fail,
        message: 'Email and Password is required',
      });
    }

    // const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // if(!EMAIL_REGEX.test(email)){
    //     res.status(400).json({
    //         status: "fail",
    //         message: "Email is not valid",
    //     })
    // }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({ email, password: hashedPassword });

    res.status(201).json({
      status: 'success',
      message: 'User created',
    });
  } catch (err) {
    if (err.code == '11000') {
      res.status(400).json({
        status: 'fail',
        message: 'Invalid email and password',
      });
      return;
    }

    console.log(err);
    res.status(500);
    res.json({
      status: ' fail',
      message: 'Internal Server Eroor',
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid Email and Password',
      });
    }

    const user = await findExistingUserByEmail(email);
    console.log(user);
    if (!user) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid Email and Password',
      });
    }

    const hashedPassword = user.password;
    const isPasswordCorrect = bcrypt.compareSync(password, hashedPassword);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        status: 'fail',
        message: 'Incorrect Password',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'User logged in',
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
        token: generateJWTToken(user),
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};


module.exports = {
  signUp,
  login,
};
