const Node = require("../src/Node");

const attention1 = new Node({
    date: "02/02",
    reason: "Vacunación",
    veterinarian: "Dra. Ríos",
    cost: 85000,
})

const attention2 = new Node({
    date: "15/03",
    reason: "Control de peso",
    veterinarian: "Dr. Gómez",
    cost: 40000,
})

const attention3 = new Node({
    date: "20/05",
    reason: "Limpieza dental",
    veterinarian: "Dra. Ríos",
    cost: 150000,
})

const attention4 = new Node({
    date: "10/06",
    reason: "Consulta general",
    veterinarian: "Dr. Gómez",
    cost: 55000,
})

const missingAttention = new Node({
    date: "01/01",
    reason: "Atención inexistente",
    veterinarian: "Dra. Ríos",
    cost: 0,
})

const head = attention1

attention1.next = attention2,
attention2.next = attention3,
attention3.next = null

function show(current){
    while(current !== null){
        console.log(current.data)
        current = current.next
    }
}

show(head)


function calculateCost(current){
    let total = 0
    while(current !== null){
        total += current.data.cost
        current = current.next
    }
    console.log(total)
}

calculateCost(head)

module.exports = {
    attention1,
    attention2,
    attention3,
    attention4,
    missingAttention,
}