const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface( { input, output });

const workDuration = 10;
const smallBreakDuration = 1;
const largeBreakDuration = 5;
let pomodoros = 4;


function startTimer(type, duration) {
    console.log(`${type} timer started`);
    setTimeout(() => {
        console.log(`${type} timer finished`);
        if(type === "work") {
            if (pomodoros === 1) {
                pomodoros = 4;
                startTimer("break", largeBreakDuration);
                
            }
            else {
                pomodoros--;
                startTimer("break", smallBreakDuration);
            }
        }
        else if(type === "break") {
            startTimer("work", workDuration);
        }
    }, duration * 1000);
    rl.close();
}

rl.question('Press Y to start timer ', (answer) => {
    if(answer === "Y" || answer === "y") {
        startTimer("work", workDuration);
    } else {
        console.log("Bye");
        rl.close();
    }
})