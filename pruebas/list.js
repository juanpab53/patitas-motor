const linkedList = require("../src/linkedList");
const Node = require("../src/Node");

function buildList(values) {
    const list = new linkedList();
    let previous = null;

    for (const value of values) {
        const node = new Node(value);
        if (previous === null) {
            list.head = node;
        } else {
            previous.next = node;
        }
        previous = node;
    }

    list.queue = previous;
    list.size = values.length;
    return list;
}

function snapshot(list) {
    return {
        head: list.head === null ? null : list.head.data,
        queue: list.queue === null ? null : list.queue.data,
        elements: list.toArray(),
        size: list.getSize(),
    };
}

function runCase(title, initialValues, operation, value) {
    const list = buildList(initialValues);

    console.log(`\n=== ${title} ===`);
    console.log("Estado inicial:", JSON.stringify(snapshot(list)));

    list[operation](value);

    console.log(`Después de ${operation}(${value}):`, JSON.stringify(snapshot(list)));
}

runCase("1. Lista vacía - addBegining", [], "addBegining", 10);
runCase("2. Lista vacía - addEnd", [], "addEnd", 10);
runCase("3. Lista con un nodo - addBegining", [10], "addBegining", 20);
runCase("4. Lista con un nodo - addEnd", [10], "addEnd", 20);
runCase("5. Lista con varios nodos - addBegining", [10, 20, 30], "addBegining", 40);
runCase("6. Lista con varios nodos - addEnd", [10, 20, 30], "addEnd", 40);
