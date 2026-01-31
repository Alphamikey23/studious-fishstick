const readline = require('node:readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Guess a number: ', (input) => {
  const user_number = input; 
  console.log(user_number,comp_number);
  if(comp_number == user_number) {
    console.log("Success");
  }
  else if(user_number > comp_number) {
    console.log("To High");
  }
  else {
    console.log("To Low");
  }
  rl.close();
});



let random = Math.random() * 100;
const comp_number = parseInt(random);

//console.log(comp_number);
//console.log(user_name);
