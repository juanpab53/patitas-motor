const clinicalRecords = require("./clinicalRecord");

const petsData ={
    Lola: [
        { date: "02/02", reason: "Vacunación", veterinarian: "Dra. Ríos", cost: 85000 },
        { date: "15/03", reason: "Control de peso", veterinarian: "Dr. Gómez", cost: 40000 },
        { date: "20/05", reason: "Limpieza dental", veterinarian: "Dra. Ríos", cost: 150000 },

    ],
    Toby: [
        {date: "10/01", reason: "Consulta por cojera", veterinarian: "Dr. Gómez", cost: 60000 },
        {date: "12/01", reason: "Radiografía de pata", veterinarian: "Dr. Gómez", cost: 120000 },
        {date: "05/04", reason: "Vacunación", veterinarian: "Dr. Ríos", cost: 85000 },
    ],
    Mía: [
        {date: "18/02", reason: "Esterilización", veterinarian: "Dra. Ríos", cost: 280000 },
        {date: "25/02", reason: "Control posquirúrgico", veterinarian: "Dra. Ríos", cost: 0 },
    ]
}

const clinicalRecord = new clinicalRecords();

for (const [pet, attentions] of Object.entries(petsData)) {
    for (const attention of attentions) {
        clinicalRecord.registerAttention(pet, attention);
    }
}


function formatAttention(attention) {
    return `${attention.date} · ${attention.reason} · ${attention.veterinarian} · ${attention.cost}`;
}

for (const [pet, record] of clinicalRecord.records) {
    let total = 0;
    record.iterate((attention) => {
        total += attention.cost;
    });

    const vacunacion = record.search((attention) => attention.reason === "Vacunación");

    console.log(`\n=== ${pet} ===`);
    console.log(`Atenciones: ${record.getSize()}`);
    console.log(`Costo total: ${total}`);
    console.log(`Última vacunación: ${vacunacion === null ? "sin registro" : formatAttention(vacunacion.data)}`);
    console.log("Historial:");
    record.iterate((attention, index) => {
        console.log(`  [${index}] ${formatAttention(attention)}`);
    });
}