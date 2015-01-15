var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var new1 = callFriend();

new1('435-215-9248')



/*

Write a function that accepts a function as it's only argument and returns a new function 
//(which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. 
//After the function has been called N number of times, console.log('STAHHP');

*/

var complicated = function(func1) {
  counter = 0;
  return function() {
    counter = counter + 1;
    if (counter <= 1) {
      return func1();
    }
    return false;
  }
}

var new1 = complicated(function() {
  alert("Hi");
});

new1();

//second part


var complicated = function(counter, func1) { // the inner function has access to the outer parameter. 
  return function() {                        // when a number is passed in for counter --> counter = that number.
    if (counter) { //if counter = number passed in is positive
      func1();
      counter--; // subtracts 1 from counter.
    }
    console.log('STAHHP');
  }
}

/* OR
var complicated = function(N, func1) {
  counter = N;
  return function() {
    counter = counter - 1;
    if (counter >= 0) {
      return func1();
    }
    console.log('STAHHP');
  }
}
*/

var new1 = complicated(2, function() { //counter now equals --> counter = 2. 
  alert("Hi");
});

new1(); // 1: if counter is positive(2) = true it runs func1 then subtracts 1 from counter. 2: counter = 1, runs func 
        // and subtracts 1. 3: counter = 0 or falsy. if statement is now false so it jumps to console.log.
