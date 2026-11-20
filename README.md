# Patitas-motor

A JavaScript project for a veterinary clinic that models each pet's clinical history as a singly linked list.  
Attention records (`date`, `reason`, `veterinarian`, `cost`) are registered per pet name, and a report prints the history, number of attentions, total cost and last vaccination for every pet.

## Requirements

- Node.js: No dependencies and no `package.json` are needed.

## How to run

```bash
node src/repot.js       # per-pet clinical report
node test/list.js       # linked list operation cases (add, insertAfter, delete)
node test/nodes.js      # demo node chain and total cost
```

`node test/list.js` also prints the `tets/nodes.js` output because it imports that module.

## Data structures

- **Node** (`src/Node.js`) — `{ data, next }`, the building block of the list.
- **linkedList** (`src/linkedList.js`) — singly linked list with `head`, `queue` (tail) and `size` supports `addEnd`, `addBegining`, `search`, `insertAfter`, `delete`, `iterate`, `toArray`, `isEmpty` and `getSize`.  
`search` returns the first node matched by reference when given a value, or the last match when given a predicate function.
- **clinicalRecord** (`src/clinicalRecord.js`) — a `Map` keyed by pet name whose values are `linkedList` instances; `registerAttention(pet, attention)` creates the history if it does not exist and appends the attention with `addEnd`.
- **Attention** — plain object `{ date, reason, veterinarian, cost }`.
- **Array** — `petsData` in `src/report.js` holds the seed records grouped by pet name.

Since the pet name is the `Map` key, there is only one history per name.

## Project structure

```text
patitas-motor/
├── bitacora.md          # Technical log 
├── README.md
├── src/
│   ├── Node.js
│   ├── linkedList.js
│   ├── clinicalRecord.js
│   └── report.js
└── test/
    ├── nodes.js
    └── list.js
```
