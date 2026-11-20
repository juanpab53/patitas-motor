const linkedList = require("../src/linkedList");
const Node = require("../src/Node");
const { attention1, attention2, attention3, attention4, missingAttention } = require("./nodes");

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

function attentionData(value) {
    return value instanceof Node ? value.data : value;
}

function formatAttention(value, indent = "  ") {
    const data = attentionData(value);

    if (data === null) {
        return `${indent}(vacío)`;
    }

    return [
        `${indent}Fecha: ${data.date}`,
        `${indent}Motivo: ${data.reason}`,
        `${indent}Veterinario: ${data.veterinarian}`,
        `${indent}Costo: ${data.cost}`,
    ].join("\n");
}

function formatSummary(value) {
    const data = attentionData(value);
    return `${data.date} · ${data.reason} · ${data.veterinarian} · ${data.cost}`;
}

function formatList(list) {
    const nodes = list
        .toArray()
        .map((value, index) => `    [${index}]\n${formatAttention(value, "      ")}`)
        .join("\n");

    return [
        `  Tamaño: ${list.getSize()}`,
        "  Cabeza:",
        formatAttention(list.head === null ? null : list.head.data, "    "),
        "  Cola:",
        formatAttention(list.queue === null ? null : list.queue.data, "    "),
        "  Nodos:",
        nodes,
    ].join("\n").trimEnd();
}

function showState(label, list) {
    console.log(`${label}\n${formatList(list)}`);
}

function runCase(title, initialValues, operation, args) {
    const list = buildList(initialValues);
    const description = `${operation}(${args.map(formatSummary).join(", ")})`;

    console.log(`\n=== ${title} ===`);
    showState("Estado inicial:", list);

    try {
        list[operation](...args);
        console.log();
        showState(`Después de ${description}:`, list);
    } catch (error) {
        console.log(`\nDespués de ${description}: ${error.message}`);
        showState("Estado tras el error:", list);
    }
}

// Test for the linked list implementation
/*
    Add cases
*/
runCase("1. Lista vacía - addBegining", [], "addBegining", [attention1]);
runCase("2. Lista vacía - addEnd", [], "addEnd", [attention1]);
runCase("3. Lista con un nodo - addBegining", [attention1], "addBegining", [attention2]);
runCase("4. Lista con un nodo - addEnd", [attention1], "addEnd", [attention2]);
runCase("5. Lista con varios nodos - addBegining", [attention1, attention2, attention3], "addBegining", [attention4]);
runCase("6. Lista con varios nodos - addEnd", [attention1, attention2, attention3], "addEnd", [attention4]);
//Insert after
runCase("7. Insertar después de un nodo cualquiera", [attention1, attention2, attention3], "insertAfter", [attention2, attention4]);

/*
    Delete cases
*/
runCase("8. Eliminar en una lista vacía", [], "delete", [attention1]);
runCase("9. Eliminar el único nodo", [attention1], "delete", [attention1]);
runCase("10. Eliminar la cabeza", [attention1, attention2, attention3], "delete", [attention1]);
runCase("11. Eliminar la cola", [attention1, attention2, attention3], "delete", [attention3]);
runCase("12. Eliminar algo que no existe", [attention1, attention2, attention3], "delete", [missingAttention]);
