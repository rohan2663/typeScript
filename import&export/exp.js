function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

function odd(a) {
  if (a % 2 != 0) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}

function ODD(arr) {
  var count = 0;
  for (var i of arr) {
    if (i % 2 != 0) {
      count++;
    }
  }
  return count;
}

function EVEN(arr) {
  var count = 0;
  for (var i of arr) {
    if (i % 2 == 0) {
      count++;
    }
  }
  return count;
}

function arraysum(arr){
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum = sum+arr[i];
  }
  return sum;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function factorial(n){
  if(n==0){
    return 1;
  }
  else{
    return n*factorial(n-1);
  }
}

function isArmstrong(n) {
  let sum = 0;
  let temp = n;
  let numberOfDigits = n.toString().length;

  while (temp > 0) {
    let remainder = temp % 10;
    sum += Math.pow(remainder, numberOfDigits);
    temp = parseInt(temp / 10);
  }

  if (sum == n) {
    return true;
  } else {
    return false;
  }
}

function printFibonacci(n) {
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = b;
    b = a + b;
    a = temp;
  }
}

module.exports = {add,sub,mul,div,mod,odd,ODD,EVEN,arraysum,isPrime,factorial,isArmstrong,printFibonacci};