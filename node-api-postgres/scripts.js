let allPokemon = document.getElementById('allUsers');

function addUser(e){
  let user = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value
  }
  fetch('http://localhost:3000/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(getUsers())
  .catch(error => console.log(error))
}

function getUsers(){
  allUsers.innerHTML = '';

  fetch('http://localhost:3000/user', { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      res.forEach(user => {
        let card = document.createElement('div');

        card.setAttribute('class', 'card');
        card.setAttribute('style', `background-image: url(${user.image})`)

        card.innerText = user.name;

        allUsers.appendChild(card);

        console.log(user)
      });
    })
    .catch(error => console.log(error))
}

