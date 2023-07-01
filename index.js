document.addEventListener('DOMContentLoaded', () =>{

    fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(films => films.forEach(film => displayMovie(film)));

    function displayMovie(film) {
        const li = document.createElement('li')
        li.innerHTML=`
        <p>${film.title}</p>
        `
        li.addEventListener('click',() => movieDetails(film))
        document.getElementById('film-names').appendChild(li)
    }

    function movieDetails(film){
        const pack = document.createElement('div')
        pack.className = 'pack-film'
        const availableTicket = film.capacity - film.tickets_sold
        pack.innerHTML= `
        <p class="title">${film.title}</p>
        <img src="${film.poster}"/>
        <p class="description">Description: ${film.description}</p>
        <p>Runtime: ${film.runtime}</p>
        <p>Showtime: ${film.showtime}</p>
        <p> Capacity: ${film.capacity}</p>
        <p>Tickets Sold: ${film.tickets_sold}</p>
        <p>Available Tickets: ${availableTicket}</p>
        <button>Buy Ticket</button>
        `
        document.getElementById('film-content').appendChild(pack)
    }


})

console.log("welcome")