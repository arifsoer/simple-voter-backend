const errorLog = (error, _, _1, next) => {
  console.error(error);
  // console.log(error.split('\n'))
  next(error);
};

const errorHandler = (error, _, res, next) => {
  try {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  } catch (error) {
    next(error);
  }
};

const failSafeHandler = (error, _, res, _1) => {
  console.log(error);
  res.status(500).json({
    status: 500,
    message: "Internal Server Error",
  });
};

export { errorHandler, errorLog, failSafeHandler };
