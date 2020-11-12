const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./queries');
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// CRUD Add, Get, Edit, Delete

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
})

app.get('/students', db.getStudent);
app.get('/students/:id', db.getStudentById);
app.get('/students', db.createStudent);

app.listen(port, () => {
    console.log(`App running on port ${port}🚀`)
});