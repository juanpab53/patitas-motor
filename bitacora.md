# Bitacora

Space where technical decisions and deliverables are explained regarding.

## Miniretos 1-4

    Here are the works for the first day.

### Minireto 1

Node map:

    attention1 -> attention2 -> attention3 -> null

    attention1 -> null ; attention2 -> attention3 -> null

Access to the nodes `attention2` and `attention3` is lost, since the only existing reference was the `head` reference in `attention1` and that node have not more access to the rest.

---

Initial states of the nodes:

| Node | Data | Next |
| ---- | ---- | ---- |
| 1 | date: 02/02, reason: Vacunación, veterinarian: Dra.Ríos, cost: 85000 | Node 2 |
| 2 | date: 15/03, reason: Control de peso, veterinarian: Dr. Gómez, cost: 40000 | Node 3 |
| 3 | date: 20/05, reason: Limpieza dental, veterinarian: Dra.Ríos, cost: 150000 | null |

### Minireto 2

#### Empty List

In this case it doesn't matter the method, beacuse the list is empty, any node that is created at here is the head `Add at the beginning` and are equals in this case `Add at the end`

    Head
    ↓
    [New Node] -> NULL

#### List with a node

In this case the `Add at the beginning` create a node, connect the new node with the `Head` and move the `Head` to the new node. The old node points out to null.

`Add at the end` connect the actual node with the new one, an this new points out to null.

Initial state
    `Head -> NULL`

Add in any case

    Head
    ↓
    [New Node] → NULL

#### List with multiple nodes

`Add at the beginning` create a node, connect the new node with the `Head` move the `Head` to the new one.

`Add at the end` if there's a pointer called `Queue` the node that have this pointer point out at the new one and `Queue` moves to the new node.

Initial State

        Head                              Queue
        ↓                                  ↓
        [Node 1] → [Node 2] → [Node 3] → NULL

Add at the beginning

        Head                               Queue
        ↓                                   ↓
        [New Node] → [Node 1] → [Node 2] → [Node 3] → NULL

Add at the end

    Head                                      Queue
        ↓                                          ↓
        [Node 1] → [Node 2] → [Node 3] → [New Node] → NULL

### Minireto 3

linkedList.js methods:

`Constructor`: O(1)  
`addEnd`: O(1)  
`addBegining`: O(1)  
`search`: O(n)  
`insertAfter`: O(n)  
`delete`: O(n)  
`iterate`: O(n)  
`toArray`: O(n)  
`isEmpty`: O(1)  
`getSize`: O(1)  

---

list.js methods:

`buildList`: O(n)  
`snapshot`: O(n)  
`runcase`: O(n)

---

#### Why removing the tail in a singly linked list requires transversing it?

Because in a singly linked list `queue` is in the last node and for delete `queue` is necesary the previous node.

### Minireto 4

| Operation | Singly Linked List (with tail pointer) | Array |
| --- | --- | --- |
| Add at the end | O(1) — `addEnd` appends through `queue` | Amortized O(1) — `push` (O(n) when it resizes) |
| Add at the beginning | O(1) — `addBegining` only relinks `head` | O(n) — `unshift` shifts all elements |
| Access attention number k | O(n) — traverse from `head` | O(1) — direct indexing `array[k]` |
| Search | O(n) — `search` walks the nodes | O(n) — linear scan with `find`/`indexOf` |
| Delete the first element | O(1) — move `head` to the next node | O(n) — `shift` shifts all elements |
| Delete the first match | O(n) — locate the node, then relink | O(n) — locate the index, then `splice` |
