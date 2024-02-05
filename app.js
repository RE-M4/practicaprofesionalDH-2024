/** IMPORTS */
const express = require ('express');
const cors = require('cors');

/** ROUTERS IMPORTS */
const apiRouter = require('./src/routes/api');

/** CONFIG */
const app = express();
app.use(express.json());
app.use(cors());

/** ROUTERS CONFIG */
app.use(apiRouter);

/** PORT CONFIG */
app.listen(3000, () => {
    console.log("Server Running");
})

