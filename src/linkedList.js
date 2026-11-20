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