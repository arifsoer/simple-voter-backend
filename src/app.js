const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const {
  errorHandler,
  errorLog,
  failSafeHandler,
} = require("./middlewares/error.middleware");
const { ForbiddenError } = require("./utils/error");

const globalRouter = require("./router");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", globalRouter);

app.use("*", (_, _1) => {
  throw new ForbiddenError();
});

app.use(errorLog);
app.use(errorHandler);
app.use(failSafeHandler);

app.listen(port, () => {
  console.log("server ready get request");
});
