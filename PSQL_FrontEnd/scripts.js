const content = document.getElementById('content');
const singleView = document.getElementById('singleView');


function addStudent(e){
    let student = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        image: document.getElementById('image').value,
        email: document.getElementById('email').value,
        major: document.getElementById('major').value,
        gpa: document.getElementById('gpa').value
    }
    fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(student)
    })
    .then(res => res.json())
    .then(student)
    .catch(error => console.log(error))
}

function getStudent(){
    content.innerHTML = '';

    fetch('http://localhost:3000/students', { method: 'GET'})
    .then(res => res.json())
    .then(res => {
        res.forEach(student => {
            let card = document.createElement('div');
            let buttons = document.createElement('div');
            let delButton = document.createElement('button');
            let viewButton = document.createElement('button');

            card.setAttribute('id', student.id)
            card.setAttribute('class', 'card');
            card.setAttribute('style', `background-image: url(${student.image || ''})`)
            buttons.setAttribute('class', 'studentButtonContainer');
            delButton.setAttribute('class', 'button');
            viewButton.setAttribute('class', 'button');
            
            delButton.onclick = (event) => deleteStudentById(event);
            viewButton.onclick = (event) => viewStudentById(event);

            delButton.innerText = `Delete ${student.first_name}`;
            viewButton.innerText = `View ${student.first_name}`;

            card.innerText = student.first_name;

            buttons.appendChild(viewButton);
            buttons.appendChild(delButton);

            card.appendChild(buttons);

            content.appendChild(card);
        })

    })
    .catch(error => console.log(error))
}

function deleteStudentById(event){
    // console.log(event.target.parentNode.id);

    fetch(`http://localhost:3000/students/${event.target.parentNode.parentNode.id}`, {method: 'DELETE', 
headers: {
    'Content-type': 'application/json'
}})
    .then(getStudent)
    .catch(error => console.log(error))
}


function viewStudentById(event){
    singleView.innerHTML = '<button id="closeButton" onclick=hidePopup(event)>x</button>';
    singleView.setAttribute('style', 'display: flex')

    fetch(`http://localhost:3000/students/${event.target.parentNode.parentNode.id}`, { method: 'GET' })
    .then(res => res.json())
    .then(student => {
               
        let first_name = document.createElement('div');                       
        let last_name = document.createElement('div');
        let image = document.createElement('img');
        let email = document.createElement('div');
        let major = document.createElement('div');
        let gpa = document.createElement('div');

        singleView.setAttribute('style', 'display: flex');

        first_name.innerText = `${student[0].first_name}`
        last_name.innerText = `${student[0].last_name}`
        image.src = `${student[0].image}`
        email.innerText = `${student[0].email}`
        major.innerText = `${student[0].major}`
        gpa.innerText = `${student[0].gpa}`
        

        singleView.appendChild(first_name);
        singleView.appendChild(last_name);
        singleView.appendChild(image);
        singleView.appendChild(email);
        singleView.appendChild(major);
        singleView.appendChild(gpa);
        

        // content.appendChild(singleView);
        
    })
    .catch(error => console.log(error))
}

function editStudent(){
    let id = document.getElementById('id').value;
    
    fetch(`http://localhost:3000/students/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then(res => res.json())
    .then(getStudent)
    .catch(error => console.log(error))
}

function hidePopup(){       
        singleView.setAttribute('style', 'display: none')    
}
