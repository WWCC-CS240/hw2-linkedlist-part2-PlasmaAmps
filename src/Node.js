class Node {
    constructor(value, next = null) {
      this.value = value;  // Stores the data value
      this.next = next;    // Initializes next to the provided node or null by default
    }
  }
  
  module.exports = Node;