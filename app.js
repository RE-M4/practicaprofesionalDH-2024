/** IMPORTS */
const express = require ('express');

/** ROUTERS IMPORTS */
const candidatesRouter = require('./src/routes/candidates');
const degreesRouter = require('./src/routes/degrees');

/** CONFIG */
const app = express();
app.use(express.json());

/** ROUTERS CONFIG */
app.use('/candidates', candidatesRouter);
app.use('/degrees', degreesRouter);

/** PORT CONFIG */
app.listen(3000, () => {
    console.log("Server Running");
})

