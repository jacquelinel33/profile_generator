const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (nodeAnswer) => {
  rl.question('What\'s the activity you like doing?', (actAnswer) => {
    rl.question(`What do you listen to while ${actAnswer}?`, (listenAnswer) => {
      rl.question(`What is your favorite meal?`, (mealAnswer) => {
        console.log(`Thanks for your input of Node: ${nodeAnswer}`)
        console.log("hello");
      rl.close();
      });
    });
  });
});
