const Node = require("../src/Node.js");

class linkedList {
    constructor() {
        this.head = null,
            this.queue = null,
            this.size = 0
    }

    addEnd(data) {
        if (this.isEmpty()) {
            const newnode = new Node(data)
            this.head = newnode
            this.queue = newnode
        } else {
            const newnode = new Node(data);
            this.queue.next = newnode;
            this.queue = newnode;
            newnode.next = null;
        }
        this.size++;
    }

    addBegining(data) {
        if (this.isEmpty()) {
            const newnode = new Node(data)
            this.head = newnode
            this.queue = newnode
        } else {
            const newnode = new Node(data);
            newnode.next = this.head;
            this.head = newnode;
        }
        this.size++
    }

    search(condition) {
        const byPredicate = typeof condition === "function";
        let found = null;
        let current = this.head;
        
        while (current !== null) {
            const matches = byPredicate ? condition(current.data) : current.data === condition;
            if (matches) {
                found = current;
                if(!byPredicate) {
                    return found;
                }
            }
            current = current.next;
        }
        return found;
    }

    insertAfter(condition, data) {
        const existingNode = this.search(condition);
        if(existingNode === null) {
            throw new Error("Node not found");
        }

        const newNode = new Node(data);
        newNode.next = existingNode.next;
        existingNode.next = newNode;

        if (existingNode === this.queue) {
            this.queue = newNode;
        }

        this.size++;
    }

    delete(condition) {
        let current = this.head;
        let previous = null;

        while(current !== null && current.data !== condition) {
            previous = current;
            current = current.next;
        }

        if (current === null) {
            throw new Error("Node not found");
        }

        if (previous === null) {
            this.head = current.next;
        } else{
            previous.next = current.next;
        }

        if(current === this.queue) {
            this.queue = previous;
        }

        current.next = null;
        this.size--;
    }

    iterate(callback) {
        let actual = this.head;
        let index = 0;
        while (actual !== null) {
            callback(actual.data, index);
            actual = actual.next;
            index++;
        }
    }

    toArray() {
        const result = [];
        this.iterate((data) => result.push(data));
        return result;
    }

    isEmpty() {
        return this.head === null;
    }

    getSize() {
        return this.size;
    }
}

module.exports = linkedList