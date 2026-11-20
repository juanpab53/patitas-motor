const linkedList = require("./linkedList");

class clinicalRecord {
    constructor() {
        this.records = new Map();
    }

    registerAttention(pet, attention) {
        if (!this.records.has(pet)) {
            this.records.set(pet, new linkedList());
        }

        this.records.get(pet).addEnd(attention);
    }
}

module.exports = clinicalRecord;