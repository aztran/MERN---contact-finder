const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // get token from header
  const token = req.header('x-auth-token');

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: 'no token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    // res.json(decoded.user);
    next();
  } catch (err) {
    console.log;
  }
};
