// node ifElseChainsSwitch.js

function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      console.log(val);
      answer = "Marley";
      break;
    case 42:
      console.log(val);
      answer = "The answer";
      break;
    case 1:
      console.log(val);
      answer = "There is #1";
      break;
    case 99:
      console.log(val);
      answer = "Missed me by this much!";
      break;
    case 7
      console.log(val);
      answer = "Ate Nine";
      break;
  }
  // if (val === "bob") {
  //   console.log(val);
  //   answer = "Marley";
  // } else if (val === 42) {
  //   console.log(val);
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   console.log(val);
  //   answer = "There is #1";
  // } else if (val === 99) {
  //   console.log(val);
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   console.log(val);
  //   answer = "Ate Nine";
  // }
  return answer;
}

console.log(chainToSwitch(1));
console.log(chainToSwitch("bob"));
