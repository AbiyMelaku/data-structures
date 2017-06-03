var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._first = 0;
  this._last = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._last] = value;
  this._last++;
}

Queue.prototype.dequeue = function() {
  var result = this._storage[this._first];
  if (this._last > this._first) { this._first++; }
  return result;
}

Queue.prototype.size = function() {
  return this._last - this._first;
}