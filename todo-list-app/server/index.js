require("dotenv").config();
const express = require('express');
const cors = require("cors");
const usersRouter = require('./routers/users');
const todosRouter = require('./routers/todos');
const auth = require('./middleware/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth.initialize());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/todos', todosRouter);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Donezo Application');
});

app.listen(port, () => {
    console.log(`Application is listening on port ${port}`);
})