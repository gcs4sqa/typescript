//always use return annotations for functions.
const add = (a: number, b: number):number => {
    return a + b;
}


const subtract = (a: number, b: number): number => {
    return a - b;
}

const divide = (a: number, b: number): number => {
    return a / b;
}

//and for anonomous functions

const multiply = function(a: number, b: number): number {
    return a * b;
}

//no return value from this function
const logger = (message: string): void => {
    console.log(message);
}


//we are never going to get to the end of this function/
const throwError = (message: string):never => {
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

//ES2015

const logWeather2 = ({date, weather}:{ date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);

logWeather2(todaysWeather);


console.log(add(5, 4));