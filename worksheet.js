let dayOfWeek = "Monday"
console.log(dayOfWeek)
dayOfWeek = "Friday"
console.log(`I cant wait for ${dayOfWeek}`)

let animalInput= prompt('What is your favorite animal?')
let colorInput= prompt('What is your favorite color?')
console.log(`I've never seen a ${colorInput} ${animalInput}!`)

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
