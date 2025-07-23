require("dotenv").config();
const express = require('express');
const usersRouter = require('./routers/users');
const todosRouter = require('./routers/todos');

const app = express();

app.use(express.json());
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/todos', todosRouter);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Application is listening on port ${port}`);
})