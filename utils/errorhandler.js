const multer = require('multer');

const errorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).send({ error: err.message });
    } else if (err) {
      return res.status(500).send({ error: 'An internal server error occurred' });
    }
  
    next();
  };
  
  module.exports = errorHandler;
  