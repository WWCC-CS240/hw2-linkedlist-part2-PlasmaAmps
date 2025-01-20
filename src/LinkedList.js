const Node = require('./Node.js');

class LinkedList {
	constructor() {
		this.head = null;
	}
	
	print(cb = console.log) {
		let current = this.head;
		while (current !== null) {
			cb(current.value);   // Call the callback on each node's value
			current = current.next;    // Move to the next node
		}
	}

	append(value) {
		const newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
		} else {
		let current = this.head;
		while (current.next !== null) {  // Traverse to the end of the list
			current = current.next;
		}
		current.next = newNode;  // Set the last node's next to the newNode
		}
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;  // Point newNode's next to the current head
		this.head = newNode;       // Update the head to the newNode 
    }
	
    // Get the value at a specific index
  get(index) {
    if (index < 0) {
      return null; // Invalid index
    }
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === index) {
        return current.value;
      }
      current = current.next;
      count++;
    }
    return null; // Index out of bounds
  }

  // Find the index of the first node with the given value
  find(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index; // Return the index when the value is found
      }
      current = current.next;
      index++;
    }
    return -1; // Value not found
  }
}

module.exports = LinkedList;