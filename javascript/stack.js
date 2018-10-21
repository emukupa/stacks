// never going to do this but
class Stack {
  constructor() {
    this.count = 0;
    this.storage = []; // using an array for storage, we can use a linked list too
  }

  // add data onto the end of the stack
  push(data) {
    this.storage[this.count] = data;
    this.count++;
  }

  // checks if stack has no items
  is_empty() {
    return this.count === 0;
  }
  // remove the last item on the stack
  pop() {
    // first check if the stack is empty
    if (this.is_empty()) return; // terminate

    // reduce the count
    this.count--;

    // store the last item in a variable
    const data = this.storage[this.count];

    // delete the last item from the stack
    delete this.storage[this.count];

    // return the data
    return data;
  }

  // returns the size of the stack
  size() {
    return this.count;
  }

  // lets you seee the top item
  peek() {
    if (this.is_empty()) return;
    const top = this.count - 1;
    return this.storage[top];
  }
}

module.exports = Stack;
