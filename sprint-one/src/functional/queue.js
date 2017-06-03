var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  //pointers for front and back of queue
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    var result = storage[first];
    if ( last > first ) { first++; }
    return result;
  };

  someInstance.size = function() {
    return last - first;
  };

  return someInstance;
};