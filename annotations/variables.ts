let apples : number = 5;

let speed : string = 'fast';

let hasname : boolean = true;

let nothingmuch : null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

// Array

let colours : string[] = ['red', 'green', 'blue'];

let mynumbers: number[] = [1, 2, 3, 4];

let truths: boolean[]= [true, true, false];

//classes
class Car {

}

let car: Car =  new Car();

//object literal

let point:  { x: number; y: number} = {
    x: 10,
    y: 20
};

//functions - the annotation of for modifying the variable

const logNumber: (i: number) => void = (i: number)=>{
    console.log(i);
};

// when to use annotations
// 1) functions that returns any type
const json = '{"x": 10, "y": 20}';
const coordins: {x: number; y: number} = JSON.parse(json);

// 2) when we declare a variable on one line
// and initialise it later
let words = ['red', 'green', 'blue'];
let foundword :boolean;

for (i = 0; i < words.length; i++){
    if (words[i] === 'green'){
        foundword = true;
    }
}  

// 3) when we have a varible whose type cannot be infered

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}