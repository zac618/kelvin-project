// This is setting a value of 293 to kelvin
const kelvin = 0;

// This is setting a value to celsius based on the value of kelvin
let celsius = kelvin - 273;

// This is setting a value to fahrenheit with the equation for calculating celsius into fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// This is rounding down the value of fahrenheit
fahrenheit = Math.floor(fahrenheit);

// Log the final answer to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
