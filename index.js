"use strict";
let a = 5;

//server and browser
//if a is not undefined and etc.
console.assert(a, "identifier 'a' is not initialized");

//server and browser
//timing
console.time("initialization");
let b = 10;
console.timeEnd('initialization');

//server and browser
//levels of console.log
console.log('Hello World');
console.warn('Hello World');
console.error('Hello World');
console.info('Hello World');
console.debug('Hello World');

//browser only
//table output
class Character{
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
}

const bill = new Character('bill', 'vampire');
const lina = new Character('lina', 'witch');
const buffy = new Character('buffy', 'slayer');

let chars = [bill, lina, buffy];

console.table(chars);
console.table(bill);
console.table(chars, ['name']);

//browser only
//counter
for(let i = 0; i < 100; ++i){
    if( (Math.random() * 100) > 50){
        console.count('greater than 50')
    }
}

//browser only
//group
console.group('first');
console.error("qwerty");
console.groupEnd();

//browser only
//group collapse
console.groupCollapsed('first');
console.error("qwerty");
console.groupEnd();

//browser only
//css style for output: %c before text for style
console.log("qwerty %cqwerty", "color: green; font-size: 98px;");