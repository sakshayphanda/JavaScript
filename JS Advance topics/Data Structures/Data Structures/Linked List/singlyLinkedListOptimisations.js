class SNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    head = null;
    tail = null;
    length = 0;
    push(val) {
        let node = new SNode(val, null);
        if(!this.head) {
        this.head = node;
        this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
            /**
            unoptimised as we need to loop through the list again to find the last element

            while(current) {
                console.log(current);
                if(!current.next) {
                    current.next = node;
                    break;
                } else {
                    current = current.next;
                }
            }
             */
        }
        this.length ++;
    }
    pop() {
        if (!this.head) this.logger('pop');
		else {
			let current = this.head;
			while (current) {
				if (current.next && !current.next.next) {
					current.next = null;
					this.length--;
				} else current = current.next;
			}
		}
        return current;
    }
	shift() {
		if (!this.head) {
            this.logger('shift');
            return undefined;
        }
			let current = this.head;
			if (current.next) this.head = current.next;
            else  {
                this.head = null;
                this.tail = null;
            }
            this.length--;
		
        return current;
	}

	unshift(value) {
        if (!this.head) this.logger('unshift');
        else {
            const newNode = new SNode(value, null);
            let current = this.head;
            newNode.next = current;
            this.head = newNode;
            this.length++;
        }
    }

	get(index) {
        let counter = 0;
        let current = this.head;
        while(current) {
            if(counter === index) {
                return current;
            } 
            current = current.next;
            counter++;
        }
    }

	set(index, value) {}

	insert(index, value) {
        if(index === 0) {
            this.unshift(value);
            return;
        }
        let prevNodeAtIndex = this.get(index - 1);
        let currentNodeAtIndex = prevNodeAtIndex.next;
        let newNode = new SNode(value, prevNodeAtIndex);
        newNode.next = currentNodeAtIndex;
        prevNodeAtIndex.next = newNode;
        this.length++;
    }

	remove(index) {
        if(index === 0) {
            this.shift();
            return;
        }
        if(!this.head) 
            this.logger('remove');
        else {
           let prevNodeAtIndex = this.get(index - 1);
           let currentNodeAtIndex = prevNodeAtIndex.next;
           prevNodeAtIndex.next = currentNodeAtIndex.next;
           currentNodeAtIndex = null;
        }
        
    }

	reverse() {
		if (!this.head) this.logger('reverse');
        let next = null;
        let prev = null;
        let current = this.head;
        // example --> 1 => 2 => 3 ____ 3 => 2 => 1
        while(current) {
            // 1
            next = current.next; // 2, 3 || 3
            current.next = prev; // 3 => 2 => 1 => null
            prev = current; // 1 || 2 || 3
            current = next;
        }
        this.head = prev;
	}

    middleMostElement() {

    }
	logger(type) {
		console.log('There is nothing to ', type);
	}
    print() {
        let current = this.head;
        if(!current) console.log('Nothing to display');
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


let linkedList = new SinglyLinkedList();
linkedList.push(5);
linkedList.shift();
linkedList.print();