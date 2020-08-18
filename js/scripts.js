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

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();

    const userNumber = parseInt($("#inputNum").val());
    //console.log(userNumber);
    let returnNumber = factorial(userNumber);

    $("#returnNumber").text(returnNumber);
    $("#returnNumber").show();

  })
})

