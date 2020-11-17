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
            throw error;
        }
        response.status(200).json(results.rows)
    });
}

const getStudentById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows)
    });
}

const addStudent = (request, response) => {
    const { first_name, last_name, image, email, major, gpa} = request.body;

    pool.query('INSERT INTO students (first_name, last_name, image, email, major, gpa) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [first_name, last_name, image, email, major, gpa], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
        
        // response.status(200).send(`Student added with first_name: ${first_name}, last_name: ${last_name}, image: ${image}, email: ${email}, major: ${major}, gpa: ${gpa}`,);
    });
}


const updateStudentById = (request, response) => {
    const { first_name, last_name, image, email, major, gpa} = request.body;
    const id = parseInt(request.params.id);
    
    pool.query(`
    UPDATE students SET first_name = $1, last_name = $2, image = $3, email = $4, major = $5, gpa = $6 WHERE id = $7 RETURNING *`,
    [first_name, last_name, image, email, major, gpa, id], 
    (error, results) => {
        if (error){
            console.log(`People with id: ${id} update.`)
            throw error;
        }
        response.status(200).send(`People with id: ${id} update.`);

        // response.status(200).send(`Student added with first_name: ${first_name}, last_name: ${last_name}, image: ${image}, email: ${email}, major: ${major}, gpa: ${gpa}`,);
    });
}
const deleteStudentById = (request, response) => {
    const id = parseInt (request.params.id);

    pool.query('DELETE FROM students WHERE id = $1', [id],(error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
        console.log(`Student with id:${id} was deleted.`);
    
    });
}

module.exports = {
    getStudent,
    getStudentById,
    addStudent,
    updateStudentById,
    deleteStudentById
}