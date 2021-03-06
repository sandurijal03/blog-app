import { Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';

const router = Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      res.status(400).json('wrong credentials');
    }

    const validate = await bcrypt.compare(req.body.password, user.password);

    if (!validate) {
      res.status(400).json('either  username or password is incorrect');
    }

    const { password, ...others } = user._doc;

    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default router;
