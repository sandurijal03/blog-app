import { response, Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import Post from '../models/Post';

const router = Router();

router.put('/:id', async (req, res) => {
  let { userId } = req.body;
  const { id } = req.params;

  if (id === userId) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(12);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true },
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('you can update only your alc');
  }
});

router.delete('/:id', async (req, res) => {
  let { userId } = req.body;
  const { id } = req.params;

  if (id === userId) {
    try {
      const user = await User.findById(id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(id);
        res.status(200).json('user deleted successfully');
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json('user not found');
    }
  } else {
    res.status(401).json('you can update only your alc');
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
