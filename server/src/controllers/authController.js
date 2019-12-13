const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secret = process.env.SECRET;
const AuthController = {};

AuthController.register = async (req, res) => {
  const { firstName, lastName, email, password, password2 } = req.body;
  const messages = [];

  if (!firstName) {
    messages.push({ text: "Please write your first name" });
  } else if (firstName.length > 250) {
    messages.push({ text: "Your first name can only have 250 characters" });
  }

  if (!lastName) {
    messages.push({ text: "Please write your last name" });
  } else if (lastName.length > 250) {
    messages.push({ text: "Your last name can only have 250 characters" });
  }

  if (!email) {
    messages.push({ text: "Please write your email" });
  } else if (email.length > 200) {
    messages.push({ text: "Your email can only have 200 characters" });
  }

  if (!password) {
    messages.push({ text: "Please write your password" });
  } else {
    if (password.length < 4) {
      messages.push({
        text: "Your password must contain at least 4 characters"
      });
    } else {
      if (!password2) {
        messages.push({ text: "Please confirm your password" });
      } else {
        if (password !== password2) {
          messages.push({ text: "Passwords do not match" });
        }
      }
    }
  }

  if (messages.length > 0) {
    return res.json({ messages });
  }

  const userEmail = await User.findOne({ email });

  if (userEmail) {
    messages.push({ text: 'The email is already in use' });

    return res.json({ messages });
  }

  const newUser = new User({ firstName, lastName, email, password });

  newUser.password = await newUser.encryptPassword(password);
  await newUser.save()
  .then(() => {
    messages.push({ text: 'You have been successfully registered, you can now login' });

    return res.json({ messages });
  })
  .catch(err => {
      console.log(err);
      return res.json(err);
  });
};

AuthController.login = async (req, res) => {
  const { email, password } = req.body;
  const messages = [];

  if (!email) {
    messages.push({ text: 'Please write your email' });
  }

  if (!password) {
    messages.push({ text: 'Please write your password' });
  }

  if (messages.length > 0) {
    return res.json({ messages });
  }

  const user = await User.findOne({ email });
  
  if (!user) {
    messages.push({ text: 'Email doesn\'t exist, please verify your email' });
    return res.json({ messages });
  }

  const match = await user.validatePassword(password);

  if (!match) {
    messages.push({ text: 'Incorrect password' });
    return res.json({ messages });
  }

  const token = jwt.sign({ id: user._id }, secret, {
    expiresIn: 60 * 60 * 24
  });

  return res.json({ token });
};

module.exports = AuthController;
