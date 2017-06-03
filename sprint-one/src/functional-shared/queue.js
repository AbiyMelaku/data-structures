var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  
  _(someInstance).extend(queueMethods);
  
  someInstance._storage = {};
  someInstance._first = 0;
  someInstance._last = 0;
  
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this._storage[this._last] = value;
  this._last++;
}

queueMethods.dequeue = function() {
  var result = this._storage[this._first];
  if (this._last > this._first) { this._first++; }
  return result;
}

queueMethods.size = function() {
  return this._last - this._first;
}

