// Variables:

//Days of the week
let dayOfWeek = "Monday"
console.log(dayOfWeek)
dayOfWeek = "Friday"
console.log(`I cant wait for ${dayOfWeek}`)

//User input
let animalInput= prompt('What is your favorite animal?')
let colorInput= prompt('What is your favorite color?')
console.log(`I've never seen a ${colorInput} ${animalInput}!`)



// Conditionals:

// Meals
// Favorite Breakfast: Eggs
// Favorite Lunch: Sandwich
// Favorite Dinner:  Pizza
let timeOfDay = 1800
let currentMeal 
if (timeOfDay < 1200){
    currentMeal="Eggs"
}
else if (timeOfDay < 1700){
    currentMeal="Sandwich"
}
else {
    currentMeal="Pizza"
}
console.log(`Current meal is ${currentMeal}`)

//Random Number
let randomNumber = Math.floor(Math.random() * 11)
if (randomNumber <=2){
    console.log("Beatles")
}
else if (randomNumber <=5){
    console.log("Stones")
}
else if (randomNumber <=8){
    console.log("Floyd")
}
else {
    console.log("Hendrix")
}



// "For" Loops

//Task 1
for (let i = 0; i < 7; i++){
    console.log("JavaScript is cool!");
}

//Task 2
for (let i = 0; i <= 10; i++){
    console.log(i);
}

//Task 3
for (let i = 0; i < 5; i++){
    console.log("hello");
    console.log("goodbye");

}



// Functions

//Favorite Movie
function printMovieName(){
    let favoriteMovie = "Avengers"
    console.log(`${favoriteMovie}`)
}
 printMovieName()

 //Favorite Band 
 function getFavoriteBand(){
    let userInput = prompt("What is your favorite band?")
    return userInput
 }
 let favoriteBand = getFavoriteBand()
 console.log(`${favoriteBand}`)

 //Concert
 function concertDisplay(musicalAct){
    let myStreet = prompt("What street do you live on?")
    console.log(`It would be great if ${musicalAct} played on ${myStreet}`)
 }
 concertDisplay(favoriteBand)



 //Arrays

 //Desktop Items
 let desktopItems = ["Desk","Mouse","Keyboard"]
 console.log(desktopItems[1])
 desktopItems.push("Infinity Gauntlet")


 for (let i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i]);
 }



 // BONUS
 
 //Magic Number
 let magicNumber = Math.floor(Math.random() * 101)
 let guess = 0

 while(true)
 {
    guess = parseInt(prompt("Guess the Magic Number:"));
    if (guess === magicNumber){
        console.log("You guessed the magic number!")
        break;
    } 
    else if (Math.abs(guess - magicNumber) <= 10){
        console.log("Getting Warmer!");
    }

    if(guess < magicNumber){
        console.log("Too Low");
    }
    else{
        console.log("Too High!");
    }

 }
