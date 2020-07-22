class CSLL {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = {
      value: value,
      next: null,
    };
    node.next = this.head; //Problematic line
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
}

let test = new CSLL(1);
test.append(2);
console.log(test.head);
console.log(test.head.next);
