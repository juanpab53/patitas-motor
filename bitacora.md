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

### Minireto 3

### Minireto 4
