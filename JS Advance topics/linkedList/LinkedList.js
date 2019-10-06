class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);

        if(this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    remove() {

    }

    display() {
        if(!this.head) {
            console.log('List is empty');
        } else {
     //  console.log(JSON.stringify(this.head));
            let current = this.head;
          //  console.log(current.data);
            
            while(current.next) {
                console.log(current.data);
                current = current.next;
            }
        }
    }
}


let ll = new LinkedList();
ll.add(5);
ll.add(6);
ll.add(57);
ll.add(55);
ll.add(1);
ll.add(2);

ll.display();
