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
    ```Head -> NULL```

Add in any case

```text
    Head
    ↓
    [New Node] → NULL
```

#### List with multiple nodes

`Add at the beginning` create a node, connect the new node with the `Head` move the `Head` to the new one.

`Add at the end` if there's a pointer called `Queue` the node that have this pointer point out at the new one and `Queue` moves to the new node.

Initial State

```text
        Head                              Queue
        ↓                                  ↓
        [Node 1] → [Node 2] → [Node 3] → NULL
```

Add at the beginning

```text
        Head
        ↓
        [New Node] → [Node 1] → [Node 2] → [Node 3] → NULL
```

Add at the end

```
    Head                                      Queue
        ↓                                          ↓
        [Node 1] → [Node 2] → [Node 3] → [New Node] → NULL
```

### Minireto 3

### Minireto 4
