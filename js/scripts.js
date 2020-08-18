// function factorial(userNumber) {
//   if (userNumber < 0) return;
//   if (userNumber === 0) return 1;
//   return userNumber * factorial(userNumber - 1);
// }

function factorial(userNumber) {
  if (userNumber === 0) {
    return 1;
  }
  if (userNumber < 0) {
    return;
  }
  let total = 1;
  for (let num = userNumber; num > 0; num -= 1) {
    console.log(num);
    total *= num;
  }
  return total;
}

function isPalindrome(phrase){
  let output;
  let reversedPhrase = phrase.split("").reverse().join('');
  console.log(reversedPhrase);
  if (reversedPhrase === phrase) {
    output = "true";
    return output;
  }
  else {
    output = "false";
    return output;
  }
}

function findPrime(number) {
  let numberArray = [];
  console.log(number);
  for (let i = 2; i <= number; i++) {
    numberArray.push(i);
  }

  let primeNumbers = numberArray.filter(narrowPrime);
  return primeNumbers;

  function narrowPrime(num) {
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        return false;
      }
    }
    return num > 1;
  }

  // numberArray.forEach(function(element) {
  //   let i = 3;
  //   if (i % 2 === 0 || i % 3 === 0 || i % 4 === 0) {
  //     numberArray.splice(i, 1);
  //   }
  //   i++;
  //   })
  
  // return numberArray;
}

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();

    const userNumber = parseInt($("#inputNum").val());
    //console.log(userNumber);
    let returnNumber = factorial(userNumber);

    $("#returnNumber").text(returnNumber);
    $("#returnNumber").show();
  })

  $("#palinTester").submit(function(event) {
    event.preventDefault();
    const phrase = $("#inputpal").val();

    let palindrome = isPalindrome(phrase);

    $("#palindromeAnswer").text(palindrome);
    $("#palindromeAnswer").show();
})
$("#primeFinder").submit(function(event) {
  event.preventDefault();
  let number = parseInt($("input#number").val());

  console.log(number);

  let primeNumbers = findPrime(number);

  $("#primeAnswer").text(primeNumbers);
  $("#primeAnswer").show();
})
})

