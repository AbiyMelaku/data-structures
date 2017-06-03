var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  //to track the front of stack
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if ( size > 0 ) { size--; }
    var result = storage[size];
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};