//Create a JavaScript file named 'script.js' and add a 'splinter' function. The function should take in 2 numbers as arguments, multiply those numbers, and save the result to a locally scoped variable called 'z'. Next, create an array that stores the first argument, second argument, and z. Return that array.
//Try testing this by console logging the splinter function, passing in 1 and 2.
//Check all of this in to a repo called "prime_prestudy_bonus_week_04"

function splinter(a, b) {
  var z = a * b;
  var array = [a, b, z];
  return array;
}

console.log(splinter(1, 2));

document.getElementById('code').innerHTML = splinter.toString();
document.getElementById('result').innerHTML = splinter(1, 2);
