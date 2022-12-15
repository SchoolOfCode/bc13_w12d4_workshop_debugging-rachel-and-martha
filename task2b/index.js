/*PLAN

1. Read the code
2. Console.logging any and every bit we can (avoid debug console at all costs!!)
3. Debug console (last resort.)

*/

function add(numb1, numb2) {
  return numb1 + numb2;
  //DONE!
}

function multiply(num1, operator, num2) {
  return num1 * num2;
  // DONE!
}

function hasPets(hasPet, firstName, lastName) {
  if (hasPet === "true") {
    return firstName + " " + lastName + " really does have a nice pet";
  } else {
    return;
    firstName + " " + lastName + " " + "has no pets";
    //another numpty. That semicolon is premature and there's no else - it's part of the 'if' function!
  }
}

let myAccountNumbers = {
  account1: "220",
  account2: 144,
  account3: 12,
  account4: 1443,
  // ok, Jose. We see what you've done here: you've set line 31 as a string. How sad.
};

function addsBalanceOfAccounts() {
  let firstAccount = myAccountNumbers[1];
  let secondAccount = myAccountNumbers["account3"];
  return firstAccount + secondAccount;
  // What the hell are you doing?! We're not cross, we're just disapointed
}

function calculator(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    let answer = firstNumber + secondNumber;
    return;
  }
  if (operator === "-") {
    let answer = firstNumber - secondNumber;
    return;
  }
  if (operator === "*") {
    let answer = firstNumber * secondNumber;
    return;
  }
  if (operator === "/") {
    let answer = firstNumber / secondNumber;
    return;
  } else {
    let answer = "Invalid inputs. Try again!";
    return;
    answer;
  }
  // oh no, on line 46 we've got the operator as a string - hang on a tick - 
  //THERE'S NO RETURN AND YOU'VE DONE THIS FOR ALL OF THEM!
  //In order to stop this runn
}

//  Do not change this.
add(2, 5);
multiply(5, "*", 10);
hasPets(true, "henry", "ford");
hasPets(false, "henry", "ford");
calculator(2, "+", 2);
calculator(5, "-", 3);
calculator(3, "*", 4);
calculator(15, "/", 3);
addsBalanceOfAccounts();

module.exports = { add, multiply, hasPets, addsBalanceOfAccounts, calculator };
