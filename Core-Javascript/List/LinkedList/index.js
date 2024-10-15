class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implementation

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add item at the last (append)
  append(value) {
    const newNode = new ListNode(value);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size += 1;
    this.printList()
  }
  //Add item at the starting (Prepend)
  prepend(value) {
    const newNode = new ListNode(value);
    // let currentNode = this.head;
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
    this.printList()
  }
  // Print the list items
  printList() {
    let currentNode = this.head;
    let listString = "";
    while (currentNode != null) {
      listString += `${currentNode.value} ==>`;
      currentNode = currentNode.next;
    }
    console.log(`${listString}null`);
    console.log('Size =>', this.getSize())
  }

  // Removing item from list

  remove(value) {
    if (!this.head) {
      return;
    }
    let currentNode = this.head;

    while (currentNode.next != null && currentNode.next.value != value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next !== null) {
      currentNode.next = currentNode.next.next;
      this.size -= 1;
    }
    this.printList()
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  getSize() {
    return this.size;
  }
}

const newList = new LinkedList();
newList.prepend(8)
newList.append(10)
newList.prepend(9)
newList.append(12)
newList.append(18)
newList.prepend(19)
newList.printList()
