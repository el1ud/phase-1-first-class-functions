function receivesAFunction(callback) {
    callback();
  }
  
  let myCallback = () => {
    console.log('This is my callback function!');
  }

  function returnsANamedFunction() {
    function namedFunction() {
      console.log('This is a named function!');
    }
    return namedFunction;
  }
  

  function returnsAnAnonymousFunction() {
    return function() {
      console.log('This is an anonymous function!');
    };
  }
