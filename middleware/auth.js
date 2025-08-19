const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET,
      async (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: "Invalid token", error: err.message })
        }
        const user = await User.findById(decoded.id)
        console.log(user);
        if (!user) {
          return res.status(404).json({ message: "User not found" })
        }
        req.user = user
        next()
      }
    );

    
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;