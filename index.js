document.addEventListener('DOMContentLoaded', () =>{

    fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(films => films.forEach((film, index) => {
        displayMovie(film)
        if(index === 0){
            movieDetails(film)
        }
    }));

    function displayMovie(film) {
        const li = document.createElement('li')
        li.innerHTML=`
        <p>${film.title}</p>
        `
        li.addEventListener('click',() => movieDetails(film))

        document.getElementById('film-names').appendChild(li)
    }

    function movieDetails(film){
      const filmcontentcontainer = document.getElementById('film-content')
      filmcontentcontainer.innerHTML = ''
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
        <p id="ticket-sold">Tickets Sold: ${film.tickets_sold}</p>
        <p id="available-tickets">Available Tickets: ${availableTicket}</p>
        <button class="buy-ticket">Buy Ticket</button>
        `
        filmcontentcontainer.appendChild(pack)
        document.querySelectorAll('.buy-ticket').forEach(button => {
            button.addEventListener('click', () => buyTicket(film , availableTicket))
        })
    }

    function buyTicket(film , availableTicket){
        if(film.tickets_sold < film.capacity){
            const soldtickets = document.getElementById('ticket-sold')
            soldtickets.innerText = "Tickets Sold: " + ((++film.tickets_sold))

            const availabletickets = document.getElementById('available-tickets')
            availabletickets.innerText = "Available Tickets: " + (((film.capacity))- (film.tickets_sold))
        
            if(film.tickets_sold === film.capacity){
            document.querySelector('.buy-ticket').innerText = 'SOLD OUT'
            }
        }
    }
    
})

