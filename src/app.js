const express = require('express')
const cors = require('cors')

const globalRouter = require('./routers')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use("/api/v1", globalRouter);

app.listen(port, () => {
  console.log('server ready get request')
});
