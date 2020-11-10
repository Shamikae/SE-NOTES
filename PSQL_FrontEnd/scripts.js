const { json } = require("express")

function addStudent(e){
    let student = {
        first_name: 'kim',
        last_name: 'Brown'
    }
    fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(students)
    })
    .then(res => console.log(res))
    .then(res => json())
    .catch(error => console.log(error))
}