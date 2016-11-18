function passed(num) {
  console.log('Test ' + num + ' Passed')
}

function failed(num, err) {
  console.log('Test ' + num + ' Failed');
  console.log("\tERROR: " + err);
}

//1 sum two numbers
function sum(x, y) {
  return x + y;
}

try {
  expect(sum(1,3)).toEqual(4);
  passed(1);
} catch(err) {
  failed(1, err)
}

//2 sum an array

var arr = [1,2,3];
var total = arr.reduce(sum);

try {
  expect(total).toEqual(6);
  passed(2)
} catch(err) {
  failed(2, err)
}

//3 F to C
function fToC(f) {
  return parseFloat((5/9) * (f - 32)).toFixed(2)
}

var temp = Math.abs(fToC(75));

try {
  expect(temp).toEqual(23.89)
  passed(3);
} catch(err) {
  failed(3, err)
}

//4 vowel count
function countVowels(str) {
  var regex = new RegExp(/(a|e|i|o|u)/, 'i')
  var count = 0;
  str.split('').map( function(letter) {
    if (letter.match(regex))
      ++count;
  });
  return count;
}

var vowelCount = countVowels('a bIg rEd firetruck')

try {
  expect(vowelCount).toEqual(6)
  passed(4)
} catch(err) {
  failed(4, err)
}


//5 Dice roll
function roll() {
  return Math.floor(Math.random() * 6) + 1
}

var dice = [roll(), roll(), roll(), roll(), roll()];

try {
  dice.map( function(die) {
    expect(die)
      .toBeGreaterThan(0)
      .toBeLessThan(7)
  });
  passed(5)
} catch(err) {
  failed(5, err);
}


//6 Avg array
function avgArray(arr) {
  return parseFloat( arr.reduce(sum) / arr.length).toFixed(1)
}

var numbers = [44, 23, 18, 9]
var avg = avgArray(numbers);

try {
  expect(avg).toEqual(23.5);
  passed(6);
} catch(err) {
  failed(6, err)
}

//7 FizzBuzz
function fizzBuzz() {
  var arr = [...Array(100)].map( function(v, i) { return ++i })
  return arr.map( function(n) {
    if (n % 15 === 0)
      return 'FazzBuzz'
    else if (n % 5 === 0)
      return 'Buzz'
    else if (n % 3 === 0)
      return 'Fizz'
    else
      return n;
  })
}

try {
  expect(fizzBuzz()).toEqual(
    [
      1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz",       "Buzz", 11, "Fizz", 13, 14, "FazzBuzz", 16, 17,       "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz",           "Buzz", 26, "Fizz", 28, 29, "FazzBuzz", 31, 32,       "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz",           "Buzz", 41, "Fizz", 43, 44, "FazzBuzz", 46, 47,       "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz",           "Buzz", 56, "Fizz", 58, 59, "FazzBuzz", 61, 62,       "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz",           "Buzz", 71, "Fizz", 73, 74, "FazzBuzz", 76, 77,       "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz",           "Buzz", 86, "Fizz", 88, 89, "FazzBuzz", 91, 92,       "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz",           "Buzz"
   ]
 );
 passed(7)
} catch(err) {
  failed(7, err)
}

//8 Factorial
//iter
function iFact(num) {
  var val = 1;
  for ( var i = 2; i <= num; i++){
    val *= i;
  }

  return val;
}

try {
  expect(iFact(5)).toEqual(120)
} catch(err) {
  failed(8, err)
}

//recursive
function rFact(num) {
  if (num === 0)
    return 1;
  else
    return num * rFact( num - 1)
}

try {
  expect(iFact(5)).toEqual(120)
  passed(8)
} catch(err) {
  failed(8, err)
}

//9 Fib
// Iter
function fib(num) {
  var left = 1;
  var right = 0;
  var temp;


  while (num >= 0) {
    temp = left;
    left = left + right;
    right = temp;
    num--
  }

  return right;
}

try {
  expect(fib(6)).toEqual(13)
  passed(9)
} catch(err) {
  failed(9, err)
}

function rFib(num) {
  if (num <= 1)
    return 1;
  return rFib(num - 1) + rFib(num - 2)
}

try {
  expect(rFib(5)).toEqual(8);
  passed(9);
} catch(err) {
  failed(9, err)
}

//10 roman
function numToRoman(num) {
  var keys = {
    M:  1000,
   CM:  900,
    D:  500,
   CD:  400,
    C:  100,
   XC:   90,
    L:   50,
   XL:   40,
    X:   10,
   IX:    9,
    V:    5,
   IV:    4,
    I:    1,
  }

  var roman = '';
  for ( var i in keys ) {
    while (num >= keys[i]) {
      roman += i;
      num -= keys[i]
    }
  }
  return roman
}

try {
  expect(numToRoman(75)).toEqual('LXXV')
  passed(10)
} catch(err) {
  failed(10, err)
}
