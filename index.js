
/* let firstCard = getRandomCard()
let secondCard = getRandomCard() */
// Arrays!
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
// query ne zna sta trazi i zato se mora dodati # za id
let cardsEl = document.querySelector("#cards-el")



// OBJECTS PEEK ADDING NAME AND CREDITS uniting 2 or more diffrent variables in a "bucket"
// FUNCTIONS INSIDE OBJECTS ARE CALLED METHODS
let player = {
    name: "Alure",
    chips: 145,
    sayHello: function () {
        console.log("Helllo")
    }
}

player.sayHello()

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips



// FUNCTION TO GET A RANDOM CARD!! first practice down there then we comee bacc
function getRandomCard() {
    let randNumb = Math.floor(Math.random() * 13) + 1
    if (randNumb === 1) {
        return 11
    } else if (randNumb > 10) {
        return 10
    } else {
        return randNumb
    }
}


/* if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Wohoo! You've got BlackJack!")
} else {
    console.log("You're out!")
} */



// CASH OUT varijabla koja prati if komandu
function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        isAlive = false
        message = "You have lost."

    }
    console.log(message)
    messageEl.textContent = message
    /*     console.log(sum)
        console.log(hasBlackJack)
        console.log(isAlive) */
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card")
        let drawnCard = getRandomCard()
        sum += drawnCard
        cards.push(drawnCard)
        console.log(cards)
        renderGame()
    }
}



// 1. Is person old enough to enter : Task

/* let age = 22

if (age < 21) {
    console.log("You can't enter the club!")
} else {
    console.log("Welcome Sir!")
} */

// DONEZO

// 2. King's bday card : Task

/* let age = 100

if (age < 100) {
    console.log("You are not elegible for birthday card!")
} else if (age === 100) {
    console.log("Kings has sent you a Birthday card!")
} else {
    console.log("Not elegible, you've already gotten one!")
}
 */
// DONEZO, 3 znaka jednako su dosta strozija od 2, 2 ce prihvatiti string a 3 nece!

// 3. Practice Boolean stuff
/* console.log(4 === 3) // false
console.log(5 > 2) // true
console.log(12 > 12) // false
console.log(3 < 0) // false
console.log(3 >= 3) // true
console.log(11 <= 11) // true
console.log(3 <= 2) // false */

// Arrays - ordered list of items, 0 indexed, pocinje od nule
/* let featuredPosts = ["Check out my Netflix clone!", "Here's code for my project", "I've just launched my portfolio"]

let yourList = ["Faast learner with short expirience already under his belt", "Friendly and adaptive "] */

// .length u arrayu nije 0 indeks i ono pocinje od broja 1

// Array - coposite / complex data data type, sastoje se od primitivnih (strings, numbers and booleans) aka legos

/* let aboutMe = [
"Alureiely", 18, "Student",
"Willing to work",
"Future milionare" true ] */

// Adding items to arrays

/* let karte = [7, 4]

karte.push(6)

console.log(karte) */

// Push the new message and then log it out:

/* let poruke = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

poruke.push(newMessage)

console.log(poruke)

poruke.pop(newMessage)

console.log(poruke) */

// ALL DONEZO! POP WAS GOOGLED AS ASKED

// JS COUNTING START, FINISH AND STEP SIZE

/* for (let count = 10; count < 21; count += 1) {
    console.log(count)
} */

// CREATING A LOOP

/* for (let i = 10; i < 101; i += 10) {
    console.log(i)
} */

// DONEZO

/* let messages = [
    "Hey, how is it going?",
    "I'm great, thank you! What about you?",
    "All good been working on getting rich lately!",
    "Mee too!!",
    "Incredible to hear that!!!",
    "babaaa",
    "TEST TEST"
]

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}  */

// TEST IT WITH CARDS! LOG ALL CARDS WITH A LOOP
/*
let kartice = [7, 3, 9]

for (let i = 0; i < kartice.length; i++) {
    console.log(kartice[i])
} */
// DONEZO

// RENDER THE SENTENCE INSIDE THE GREETING EL

/* let sentence = ["Hello,", "my", "name", "is", "Alurey"]
let greetEl = document.querySelector("#greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetEl.textContent += sentence[i] + " "
}
 */

// DONEZO

// function practice
/*
let p1t = 102
let p2t = 107

function faster() {
    if (p1t < p2t) {
        return p1t // faster time around a track as thesee are hot lap times
    } else if (p1t > p2t) {
        return p2t
    } else { return p1t }
}
let fastestRace = faster()


function totalTime() {
    let raceTime = p1t + p2t
    return raceTime
}
let returned = totalTime()
console.log(returned) */

// DONEZO

// GENERATING RANDOM NUMBERS Math.random gives something betwween 0.000 and 0.999, floor rounds the number
/* let randomNumber = Math.random() * 6 */
/* let flooredNumber = Math.floor(Math.random() * 6) + 1


console.log(flooredNumber) */
/* console.log(randomNumber) */


// DO ALL THIS BUT WITH A ROLLDICE FUNCTION

/* function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1
    return roll
}

console.log(rollDice()) */

// DICE ROLL DONEZO

// LOGICAL OPERATORS
/*
let hasComp = true
let givesCert = true

if (hasComp && givesCert) {
    generateCert()
} else {
    console.log("NO CERTIFICATE FOR YOU!")
}

function generateCert() {
    console.log("Generating certificate...")
} */

/* let hasSolve = false
let hintsLeft = false

if (hasSolve === false && hintsLeft === false) {
    showSolution()
} else { console.log("Keep trying you can dew it") }

function showSolution() {
    console.log("Showing the solution:")
}

// && AND - || OR

function recMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

let likesDocs = false
let likesStartUps = false

if (likesDocs === true || likesStartUps === true) {
    recMovie()
} else { console.log("Search for your Favorite movies here:") }
 */
// EASY


// OBJECTS - store data in-depth - composite/complex data type
// Key value pairs

/* let course = {
    title: "Learn with us!",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.length)
console.log(course.tags)
console.log(course["tags"]) */

// Task time: create an object that presents an castle listing and it must contain:
// at least one: boolean, one string, one number, and one array. Log out at leaast two of the keys using the dot notation

/* let castleListing = {
    isModern: false,
    isPreserved: true,
    //  isSuperhost: true,
    title: "Stormwind Castle",
    pricePerNight: 250,
    pondsNear: ["Wishing Pond", "Olivia's Pond", "Sunwell"]
}

console.log(castleListing.title)
console.log(castleListing.pricePerNight) */


// DONEZO