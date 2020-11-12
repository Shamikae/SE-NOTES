let content =document.getElementById('content');

function addStudent(e){
    let student = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        major: document.getElementById('major').value,
        email: document.getElementById('email').value
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

    getStudent();
}

function getStudent(){
    // container.innerHTML = '';
    fetch('http://localhost:3000/students', { method: 'GET'})
    .then(res => res.json()
    .then(res => {
        res.forEach(student => {
            let card = document.createElement('div');

            card.setAttribute('class', 'card');
            card.setAttribute()
            
            card.innerText = student.first_name;
            console.log(student)
            
        });
    })
    .catch(error => console.log(error)))
}