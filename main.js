function createGame(player1, hour, player2) {
    return`
        <li>
            <abbr title=${player1.charAt(0).toUpperCase() + player1.slice(1)}>
                <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            </abbr>
            <strong>${hour}</strong>
            <abbr title=${player2.charAt(0).toUpperCase() + player2.slice(1)}>
                <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
            </abbr>
        </li>
    `
}

let delay = -0.3

function createCard(date, day, games) {
    delay = delay + 0.3
    return`
        <div class="card" style="animation-delay: ${delay}s;">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = `
    ${createCard('21/11', 'segunda', 
        createGame("brazil", "08:00", "camaroon") +
        createGame("hungary", "13:00", "argentina") +
        createGame("colombia", "20:00", "japan"))}
    ${createCard('24/11', 'quinta', 
        createGame("switzerland", "07:00", "camaroon") +
        createGame("portugal", "13:00", "ghana") +
        createGame("brazil", "16:00", "serbia"))}
    ${createCard('28/11', 'segunda', 
        createGame("southkorea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "16:00", "uruguai"))}
    
`

