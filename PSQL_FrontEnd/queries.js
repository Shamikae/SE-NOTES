const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: 'postgres',
    port: 5432,
})

const getStudent = (request, response) => {
    pool.query('SELECT * FROM students', (error, results) => {

        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getStudentById = (request, response) => {
    console.log(error, results)
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM students WHERE id = $1' [id], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows)
    });
}

const createStudent = (request, response) => {
    const { first_name, last_name} = request.body;

    pool.query('INSERT INTO students (first_name, last_name) VALUES ($1, $2) RETURNING *', [first_name, last_name], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).send(`Student added with first_name: ${first_name}, last_name: ${last_name}`);
    });
}
module.exports = {
    getStudent,
    getStudentById,
    createStudent
}