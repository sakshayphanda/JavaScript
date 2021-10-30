class DNode{
    constructor(data){
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data){
        var newNode = new DNode(data);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        /**
         * Complexity O(1) -- constant
         * Poping becomes easier than the singly linked list.
         * We don't have to traverse the whole list to get to the second last element.
         */
        if(!this.head) return undefined;
        var current = this.head;
        const poppedNode = this.tail;
        this.tail = this.tail.previous;
        this.tail.next = null;
        poppedNode.previous = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.head.previous = null;
        currentHead.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(data){
        var newNode = new DNode(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        const startFromEnd = index >= ((this.length-1) - index);
        let counter = startFromEnd ? this.length-1 : 0;
        let current = startFromEnd ? this.tail :  this.head;
        while(counter !== index){
            current = startFromEnd ? current.previous : current.next;
            startFromEnd ? counter-- : counter++;
        }
        return current;
    }
    set(index, data){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.data = data;
            return true;
        }
        return false;
    }
    insert(index, data){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(data);
        if(index === 0) return !!this.unshift(data);
        const elemAtIndex = this.get(index);
        const prev = elemAtIndex.previous;
        var newNode = new DNode(data);
        newNode.next = elemAtIndex;
        newNode.previous = prev;
        elemAtIndex.previous = newNode;
        prev.next = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var nodeToBeRemoved = this.get(index);
        const prevNode = nodeToBeRemoved.previous;
        prevNode.next = nodeToBeRemoved.next;
        nodeToBeRemoved.next.previous = prevNode;
        nodeToBeRemoved.previous = null;
        nodeToBeRemoved.next = null;
        this.length--;
        return nodeToBeRemoved.data;
    }
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.data)
            current = current.next
        }
        console.log(arr);
    }
}

var list = new DoublyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999);
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.insert(6, 400);
list.remove(4);
list.print();







