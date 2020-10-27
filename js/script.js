//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."
let jobTitle = 'Pilot';
let geographicLocation = 'Tokyo';
let annualSalary = '250K Dollars';
let companyName = 'Goerge company';

console.log(`You Will be a  ${jobTitle} in ${geographicLocation} ,  making  ${annualSalary}  for  ${companyName} .`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".
let currtnetAgeForSnachCalc = 19;
let maximumAgeSnackCalc = 80;
let SnackEstimatedAmonut = 2;
let SnackTotalFromToday  =  365 * 2 * (maximumAgeSnackCalc - currtnetAgeForSnachCalc);
console.log(` You will need ${SnackTotalFromToday} to last you until the ripe old age of ${maximumAgeSnackCalc}`)

//EXERCISE 4: The Geometrizer Area of the circle = π × R²  Circumference of a circle	2 × π × R.
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let piValue = Math.PI;
let circleRadius = 5;

let circumference = 2 * piValue * circleRadius;
let CircumfenceFinal = circumference.toFixed(0)
let AreaOfTheCircle = piValue * circleRadius **2;
let AreFinalResult = AreaOfTheCircle.toFixed(0)
console.log(` The circumference is ${CircumfenceFinal}, and the Area is ${AreFinalResult} `)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
/*
  °C to °F	Divide by 5, then multiply by 9, then add 32
°F to °C	Deduct 32, then multiply by 5, then divide by 9
  */

  
let celsiusValue = 50;
let celsiusFahrenheitConvertion = celsiusValue / 5 * 9 + 30;
let CelsitoFahFinal = celsiusFahrenheitConvertion.toFixed(0)

let fahrenheitValue = 94;
let fahrenheitCelsiusConvertion = (fahrenheitValue-32) * 5/9;
let FahtoCelFinal = fahrenheitCelsiusConvertion.toFixed(0)

console.log(` ${fahrenheitValue}°F is ${FahtoCelFinal}°C`)
console.log(`${celsiusValue}°C is ${CelsitoFahFinal}°F`)
