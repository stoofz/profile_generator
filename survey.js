const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer1) => {
  console.log(`Thanks for telling me your name, ${answer1}`);

  rl.question("What's an activity you like doing? ", (answer2) => {
    console.log(`${answer2} sounds fun!`);

    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`I like listening to ${answer3} too!`);

      rl.question("Which meal is your favourite? (breakfast, lunch, dinner) ", (answer4) => {
        console.log(`MY favourite is ${answer4} too!`);
    
        rl.question("Whats your favourite food? ", (answer5) => {
          console.log(`${answer5} is delicious`);

          rl.question("Whats your favourite sport? ", (answer6) => {
            console.log(`${answer6} is delicious`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`${answer7} is delicious`);
              rl.close();
              console.log(`Hi, I'm ${answer1}. I like to ${answer2} while listening to ${answer3}. I'm big into ${answer4}, my favourite food is ${answer5}. I'm a huge fan of ${answer6} and I'm amazing at ${answer7}`);
            });
          });
        });
      });
    });
  });
});

