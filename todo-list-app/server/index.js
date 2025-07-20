require("dotenv").config();
const express = require('express');
const usersRouter = require('./routers/users');

const app = express();

app.use(express.json());
app.use('/api/v1/users', usersRouter);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Application is listening on port ${port}`);
})