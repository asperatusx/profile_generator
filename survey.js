const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("What's your name?  \n", (answer1) => {  
  console.log(`Your Answer: ${answer1}`);
  rl.question("What's an activity you like doing? \n", (answer2) => {
    console.log(`Your Answer: ${answer2}`);
    rl.question("What do you listen to while doing that? \n", (answer3) => {
      console.log(`Your Answer: ${answer3}`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) \n", (answer4) => {
        console.log(`Your Answer: ${answer4}`);
        rl.question("What's your favourite thing to eat for that meal? \n", (answer5) => {
          console.log(`Your Answer: ${answer5}`);
          rl.question("Which sport is your absolute favourite? \n", (answer6) => {
            console.log(`Your Answer: ${answer6}`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! \n", (answer7) => {
              console.log(`Your Answer: ${answer7}`);
              console.log('Here is your profile:')
              console.log(`My name is ${answer1}. My favourite activity is ${answer2} and I enjoy listening to ${answer3} while ${answer2}. My favourite meal is ${answer4}. My favourite thing to eat for ${answer4} is ${answer5}. While I'm eating I like to watch ${answer6}. My superpower is ${answer7}`);

              rl.close();
            })
          })
        })
      })
    })
    
    
  })
});

