const { Employee } = require("./Employee");

class SalesPerson extends Employee {
    #salary;
    #isHired;
    #totalSales;
    constructor(name, position, salary, clients) {
        super(name, position, salary);
        this.#totalSales = 0;
    }

    getSalesNumbers() {
        return this.#totalSales;
    }

    makeSale(amount) {
        this.#totalSales += amount;
    }
}

module.exports = {
    SalesPerson,
}