// This is setting a value of 293 to kelvin
const kelvin = 293;

// This is setting a value to celsius based on the value of kelvin
let celsius = kelvin - 273;

// This is setting a value to fahrenheit with the equation for calculating celsius into fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// This is rounding down the value of fahrenheit
fahrenheit = math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
