const errorHandler = (error, req, res, next) => {
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
  });
};

const errorLog = (error, _, _1 , next) => {
  console.error(error)
  console.log(error.split('\n'))
  next(error)
}

module.exports = { errorHandler, errorLog };
