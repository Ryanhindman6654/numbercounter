# discord-number-counter

A simple number counter package for Discord bots using discord.js. Supports normal, reverse, and multiply counting modes.

## Installation

bash
npm install discord-number-counter



## Usage/Examples


const NumberCounter = require('discord-number-counter');

const counter = new NumberCounter();

// Normal counting
counter.setMode('normal');

counter.setStep(1);

console.log(counter.next()); // 1

console.log(counter.next()); // 2



// Reverse counting
counter.reset();

counter.setMode('reverse');

counter.setStep(1);

console.log(counter.next()); // -1

console.log(counter.next()); // -2



// Multiply counting
counter.reset();

counter.setMode('multiply');

counter.setMultiplier(3);

console.log(counter.next()); // 3

console.log(counter.next()); // 9





