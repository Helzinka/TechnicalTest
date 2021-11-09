let dataset = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz"]

// Impement fizzbuzz logic
function fizzbuzz(number) {
    let output = ""
    if(number % 3 == 0 && number % 5 == 0 && number % 15 == 0) {
        return output += "FizzBuzz"
    }
    else if (number % 3 == 0) {
        return output += "Fizz"
    }
    else if(number % 5 == 0) {
        return output += "Buzz"
    }
    return number;
  }
  
//Implement the wrapper so we can count from 0 to STOP.
function main() {
    for(let i=1; i<dataset.length+1 ;i++) {
        console.log(fizzbuzz(i));
    }
}

main();
