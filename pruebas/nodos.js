import Node from '../src/Nodo.js'

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