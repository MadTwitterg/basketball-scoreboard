//define variables
let homeScore = 0
let guestScore = 0
let homeEl = document.getElementById("home-el")
let guestEL = document.getElementById("guest-el")

//add points to home team
function add1PointToHome() {
    homeScore += 1
    homeEl.textContent = homeScore 
}
function add2PointToHome() {
    homeScore += 2
    homeEl.textContent = homeScore 
}
function add3PointToHome() {
    homeScore += 3
    homeEl.textContent = homeScore
}

//add points to guest team
function add1PointToGuest() {
    guestScore += 1
    guestEL.textContent = guestScore 
}
function add2PointToGuest() {
    guestScore += 2
    guestEL.textContent = guestScore 
}
function add3PointToGuest() {
    guestScore += 3
    guestEL.textContent = guestScore 
}

//reset the game
function reset() {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEL.textContent = guestScore
}
